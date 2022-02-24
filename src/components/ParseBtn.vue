<template>
  <q-btn :class="store.btnClass" @click="parseData">{{store.btnText}}</q-btn>
</template>

<script>
  import { store } from "./store.js";
  import { 
    isDataOk,
    getRowsForSalesQuasarTable,
    getRowsForSummaryQuasarTable,
    getColsForSalesQuasarTable,
    getColsForSummaryQuasarTable,
    shakeBtn,
  } from '../helpers/helpers.js'
  
  export default {
    data() {
      return {
        store: store.state,
      }
    },
    methods: {
      parseData() {
        const text = store.state.textareaText
        if (!isDataOk(text)) shakeBtn()
        if (!isDataOk(text)) return
        store.state.rowsFirstTable = getRowsForSalesQuasarTable(text)
        store.state.rowsSecondTable = getRowsForSummaryQuasarTable(text)
        store.state.colsFirstTable = getColsForSalesQuasarTable(text)
        store.state.colsSecondTable = getColsForSummaryQuasarTable()
        store.state.showTable = true
        store.state.btnText = 'Update'
      },
    },
  }
</script>

<style lang="scss" scoped>
  button {
    margin-top: 3rem;
  }
  @keyframes shake {
    0% { transform: translateX(0) }
    10% { transform: translateX(5px) }
    30% { transform: translateX(0) }
    50% { transform: translateX(5px) }
    70% { transform: translateX(0) }
    90% { transform: translateX(5px) }
    100% { transform: translateX(0) }
  }
  .shaking {
    animation-name: shake;
    animation-duration: .3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
</style>
