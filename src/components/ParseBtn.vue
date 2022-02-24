<template>
  <q-btn @click="parseData">{{btnText}}</q-btn>
</template>

<script>
  import { store } from "./store.js";
  import { 
    getRowsForSalesQuasarTable,
    getRowsForSummaryQuasarTable,
    getColsForSalesQuasarTable,
    getColsForSummaryQuasarTable 
  } from '../helpers/helpers.js'
  
  export default {
    data() {
      return {
        btnText: 'Parse data',
      }
    },
    methods: {
      parseData() {
        store.state.rowsFirstTable = getRowsForSalesQuasarTable(store.state.textareaText)
        store.state.rowsSecondTable = getRowsForSummaryQuasarTable(store.state.textareaText)
        store.state.colsFirstTable = getColsForSalesQuasarTable(store.state.textareaText)
        store.state.colsSecondTable = getColsForSummaryQuasarTable()
        store.state.showTable = true
        this.btnText = 'Update'
      },
    },
  }
</script>

<style lang="scss" scoped>
  button {
    margin-top: 3rem;
  }
</style>
