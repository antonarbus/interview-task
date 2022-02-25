<template>
  <q-btn :class="store.state.btnClass" @click="parseData">{{ store.state.btnText }}</q-btn>
</template>

<script lang="ts">
  import store from '@/store'
  import {
    isDataOk,
    getRowsForTable1,
    getRowsForTable2,
    getColsForTable1,
    getColsForTable2,
    shakeBtn,
  } from '@/helpers/helpers'

  export default {
    data() {
      return {
        store: store,
      }
    },
    methods: {
      parseData(): void {
        const text = store.state.inputText
        if (!isDataOk(text)) {
          shakeBtn()
          return
        }
        store.state.colsTable1 = getColsForTable1(text)
        store.state.rowsTable1 = getRowsForTable1(text)
        store.state.colsTable2 = getColsForTable2()
        store.state.rowsTable2 = getRowsForTable2(text)
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
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
