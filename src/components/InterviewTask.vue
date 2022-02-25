<template>
  <GoBackBtn />
  <TaskSpecs />
  <TextArea />
  <ParseBtn />
  <TableQuasar
    :rows="store.state.rowsTable1"
    :cols="store.state.colsTable1"
    :isShown="store.state.showTable"
    :headerName="'Parsed data'"
    :tableName="'Sales report'"
  />
  <TableQuasar
    :rows="store.state.rowsTable2"
    :cols="store.state.colsTable2"
    :isShown="store.state.showTable"
    :headerName="'Summary'"
    :tableName="'Grouped by region'"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { store } from '../store'
  import GoBackBtn from './GoBackBtn.vue'
  import TaskSpecs from './TaskSpecs.vue'
  import TextArea from './TextArea.vue'
  import ParseBtn from './ParseBtn.vue'
  import TableQuasar from './TableQuasar.vue'

  export default defineComponent({
    name: 'App',
    components: { GoBackBtn, TaskSpecs, TextArea, ParseBtn, TableQuasar },
    data() {
      return {
        store: store,
      }
    },
  })
</script>

<style lang="scss"></style>
