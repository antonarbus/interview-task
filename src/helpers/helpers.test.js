// following row structure is required by Quasar table columns https://v1.quasar.dev/vue-components/table
import moment from 'moment';

const parseStrToArr = str =>{
  if (typeof str !== 'string') return [] 
  return str
    .split('\n')
    .map(str => str.trim())
    .filter(str => str.length)
    .map(row => row.split(';'))
    .map(rowArr => rowArr.map(str => str.trim()))}

test('should return array', () => { 
  expect(Array.isArray(parseStrToArr(''))).toBe(true)
  expect(Array.isArray(parseStrToArr('some text'))).toBe(true)
  expect(Array.isArray(parseStrToArr('\n\n\n'))).toBe(true)
})

const getTitlesArr = str => parseStrToArr(str)[0]

test('should return array', () => { 
  expect(Array.isArray(getTitlesArr(''))).toBe(true)

})

const getRowsArr = str => parseStrToArr(str).slice(1)

export const getColsForSalesQuasarTable = str => {
  
  return getTitlesArr(str).map(title => ({
    name: title,
    label: title,
    field: title,
    align: 'center',
    sortable: false,
  }))
}

export const getRowsForSalesQuasarTable = str => {
  const titlesArr = getTitlesArr(str)
  const rowsArr = getRowsArr(str)
  const arrOfObj = rowsArr.map(dataRowArr => {
    return Object.fromEntries([
      ...dataRowArr.map((data, index) => {
        return [titlesArr[index], data]
      }),
    ])
  })

  const arrWithFixedTypes = arrOfObj.map(row => {
    row['Unit Cost'] = parseFloat(row['Unit Cost'].replace(',', '.'))
    row['Units'] = parseInt(row['Units'])
    row['OrderDate'] = moment(row['OrderDate'], 'DD-MM-YYYY').format('DD.MM.YYYY')
    return row
  })
  return arrWithFixedTypes
}

export const getColsForSummaryQuasarTable = () => [
  { align: 'center', field: 'Last OrderDate', label: 'Last OrderDate', name: 'Last OrderDate', sortable: false },
  { align: 'center', field: 'Region', label: 'Region', name: 'Region', sortable: false },
  { align: 'center', field: 'Total Units', label: 'Total Units', name: 'Total Units', sortable: false, },
  { align: 'center', field: 'Total Cost', label: 'Total Cost', name: 'Total Cost', sortable: false },
]

export const getRowsForSummaryQuasarTable = str => {
  const arr = getRowsForSalesQuasarTable(str)
  const newArr = []
  arr.forEach(row => {

    const currentRegion = row['Region']
    if (newArr.some(el => el['Region'] === currentRegion)) return

    newArr.push({})

    newArr.at(-1)['Region'] = currentRegion

    const lastOrderDate = arr
      .filter(row => row['Region'] === currentRegion)
      .sort((a, b) => moment(b['OrderDate']).valueOf() - moment(a['OrderDate']).valueOf())[0][
      'OrderDate'
    ]
    newArr.at(-1)['Last OrderDate'] = lastOrderDate

    const totalUnits = arr
      .filter(row => row['Region'] === currentRegion)
      .reduce((accumulator, o) => {
        return accumulator + row['Units']
      }, 0)
    newArr.at(-1)['Total Units'] = totalUnits

    const totalCost = arr
      .filter(row => row['Region'] === currentRegion)
      .reduce((accumulator, row) => {
        return accumulator + row['Units'] * row['Unit Cost']
      }, 0)
    newArr.at(-1)['Total Cost'] = totalCost
  })
  return newArr
}
