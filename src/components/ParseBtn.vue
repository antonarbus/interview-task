<template>
  <q-btn label="Read data" @click="parseData" />
</template>

<script>
  import { store } from "./store.js";
  import moment from 'moment';
  
  const tempStr = `OrderDate;Region;Rep;Item;Units;Unit Cost
    6.1.2021;East;Johns;Pencil;95;1,99
    7.9.2020;West;Emma;Pen;50;2,4
    17.2.2020;West;Nick;Paper;450;1,0
  `

  const parseStrToArr = (str) => str
    .split("\n")
    .map(str => str.trim())
    .filter(str => str.length)
    .map(row => row.split(';'))
    .map(rowArr => rowArr.map(str => str.trim())) 

  const getTitlesArr = (str) => parseStrToArr(str)[0]

  const getRowsArr = (str) => parseStrToArr(str).slice(1)

  const getColsForQuasarTable = (str) => {
    // following row structure is required by quasar table columns
    /*
      [
        { name: 'name', required: true, label: 'Dessert (100g serving)', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
    */
    const titlesArr = getTitlesArr(str)
    return titlesArr.map(title => ({ name: title, label: title, field: title, align: 'center', sortable: true}))
  }

  const getRowsForQuasarTable = (str) => {
    // following row structure is required by quasar table rows
    /*
      [
        {'title1': value, 'title2': value, 'title3': value},
        {'title1': value, 'title2': value, 'title3': value},
        {'title1': value, 'title2': value, 'title3': value},
      ]
    */

    // Object.fromEntries() works following way
    /*
      Object.fromEntries([['name', 'value'], ['age', 'value']]) // { name: 'value', age: 'value' }
    */
    const titlesArr = getTitlesArr(str)
    const dataRowsArr = getRowsArr(str)
    const arr = dataRowsArr.map((dataRowArr) => {
      return Object.fromEntries([...dataRowArr.map((data, index) => {
        return [titlesArr[index], data]
      })])
    })
    const arrWithFixedTypes = arr.map(o => {
      o['Unit Cost'] = parseFloat(o['Unit Cost'].replace(',', '.'))
      o['Units'] = parseInt(o['Units'])
      o['OrderDate'] = moment(o['OrderDate'], 'DD-MM-YYYY').format('DD.MM.YYYY');
      return o
    })
    return arrWithFixedTypes
  }

  const getSummaryColsForQuasarTable = () => ([
    { align: "center", field: "Last OrderDate", label: "Last OrderDate", name: "Last OrderDate", sortable: true },
    { align: "center", field: "Region", label: "Region", name: "Region", sortable: true },
    { align: "center", field: "Total Units", label: "Total Units", name: "Total Units", sortable: true },
    { align: "center", field: "Total Cost", label: "Total Cost", name: "Total Cost", sortable: true },
  ])

  const getSummaryRowsForQuasarTable = (str) => {
    console.log(666)
  const arr = getRowsForQuasarTable(str)
  const newArr = []
  arr.forEach(o => {
    const currentRegion = o['Region']
    if(newArr.some(el => el['Region'] === currentRegion)) return
    newArr.push({})
    newArr.at(-1)['Last OrderDate'] = arr.filter(o => o['Region'] === currentRegion).sort((a,b) => moment(b['OrderDate']).valueOf() - moment(a['OrderDate']).valueOf())[0]['OrderDate']
    newArr.at(-1)['Region'] = o['Region']
    newArr.at(-1)['Total Units'] = arr.filter(o => o['Region'] === currentRegion).reduce((accumulator, o) => { return accumulator + o['Units'] }, 0)
    newArr.at(-1)['Total Cost'] = arr.filter(o => o['Region'] === currentRegion).reduce((accumulator, o) => { return accumulator + o['Units'] * o['Unit Cost']}, 0)
  })

  return newArr
}

  export default {
    data() {
      return {
      };
    },
    methods: {
      parseData() {
        store.state.parsedData = parseStrToArr(store.state.textareaText)
        store.state.rows = getRowsForQuasarTable(store.state.textareaText)
        store.state.rowsForSummaryTable = getSummaryRowsForQuasarTable(store.state.textareaText)
        store.state.cols = getColsForQuasarTable(store.state.textareaText)
        store.state.colsForSummaryTable = getSummaryColsForQuasarTable()
        store.state.showTable = true
        console.log(store.state)  
      },
    },
  }
</script>

<style lang="scss" scoped>
</style>
