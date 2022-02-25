// following row structure is required by Quasar table columns https://v1.quasar.dev/vue-components/table
import moment from 'moment'
import store from '@/store'
// import type RowsTypeTable1 from '@/types/RowsTypeTable1'
import type RowsTypeTable2 from '@/types/RowsTypeTable2'

function parseStrToArr(str: string): string[][] {
  return str
    .split('\n')
    .map(str => str.trim())
    .filter(str => str.length)
    .map(row => row.split(';'))
    .map(rowArr => rowArr.map(str => str.trim()))
}

export function isDataOk(str: string): boolean {
  if (!str.trim()) return false
  const arr = parseStrToArr(str)

  if (arr.length < 2) return false
  const areTitlesOk =
    JSON.stringify(arr[0]) ===
    JSON.stringify(['OrderDate', 'Region', 'Rep', 'Item', 'Units', 'Unit Cost'])

  if (!areTitlesOk) return false
  const areArraysInside = arr.every(el => Array.isArray(el))

  if (!areArraysInside) return false
  const areSixElsInStr = arr.every(el => el.length >= 6)

  if (!areSixElsInStr) return false
  const areUnitsNumbers = !arr.some(
    (el, index) => index !== 0 && isNaN(parseFloat(el[4].replace(',', '.'))),
  )

  if (!areUnitsNumbers) return false
  const areCostsNumbers = !arr.some(
    (el, index) => index !== 0 && isNaN(parseFloat(el[5].replace(',', '.'))),
  )

  if (!areCostsNumbers) return false
  return true
}

export function shakeBtn(): void {
  store.state.btnClass = 'shaking'
  store.state.btnText = 'Wrong data'
  setTimeout(() => {
    store.state.btnClass = 'not-shaking'
    store.state.btnText = 'Update'
  }, 600)
}

function getTitlesArr(str: string): string[] {
    return parseStrToArr(str)[0];
}

function getRowsArr(str: string): string[][] {
    return parseStrToArr(str).slice(1);
}

export function getColsForTable1(str: string): { name: string; align: string; field: string; label: string; sortable: boolean }[] {
  return getTitlesArr(str).map(title => ({
    name: title,
    label: title,
    field: title,
    align: 'center',
    sortable: true,
  }))
}

export function getRowsForTable1(str: string): any[] {
  const titlesArr = getTitlesArr(str)
  const rowsArr = getRowsArr(str)
  const arrOfObj = rowsArr.map(dataRowArr => {
    return Object.fromEntries([...dataRowArr.map((data, index) => ([titlesArr[index], data])) ])
  })
  const arrFixedTypes = arrOfObj.map((row) => {
    row['Unit Cost'] = parseFloat(row['Unit Cost'].replace(',', '.'))
    row['Units'] = parseInt(row['Units'])
    row['OrderDate'] = moment(row['OrderDate'], 'DD.MM.YYYY').format('YYYY.MM.DD')
    return row
  })
  return arrFixedTypes
}

export function getColsForTable2(): { name: string; align: string; field: string; label: string; sortable: boolean }[] {
    return [
      { align: 'center', field: 'Last OrderDate', label: 'Last OrderDate', name: 'Last OrderDate', sortable: true, },
      { align: 'center', field: 'Region', label: 'Region', name: 'Region', sortable: true },
      { align: 'center', field: 'Total Units', label: 'Total Units', name: 'Total Units', sortable: true, },
      { align: 'center', field: 'Total Cost', label: 'Total Cost', name: 'Total Cost', sortable: true, },
    ]
}

export function getRowsForTable2(str: string): RowsTypeTable2[] {
  const arr = getRowsForTable1(str)
  const outputArr = [] as RowsTypeTable2[]
  arr.forEach(row => {
    const currentRegion = row['Region']
    if (outputArr.some(el => el['Region'] === currentRegion)) return
    outputArr.push({ 'Last OrderDate': '', Region: '', 'Total Units': 0, 'Total Cost': 0, })

    outputArr.at(-1)['Region'] = currentRegion

    const lastOrderDate = arr
      .filter(row => row['Region'] === currentRegion)
      .sort((a, b) => moment(b['OrderDate']).valueOf() - moment(a['OrderDate']).valueOf())[0][
      'OrderDate'
    ]
    outputArr.at(-1)['Last OrderDate'] = lastOrderDate

    const totalUnits = arr
      .filter(row => row['Region'] === currentRegion)
      .reduce((accumulator, row) => {
        return accumulator + row['Units']
      }, 0)
    outputArr.at(-1)['Total Units'] = totalUnits

    const totalCost = arr
      .filter(row => row['Region'] === currentRegion)
      .reduce((accumulator, row) => {
        return accumulator + row['Units'] * row['Unit Cost']
      }, 0)
    outputArr.at(-1)['Total Cost'] = totalCost
  })
  return outputArr
}
