<template>
  <TaskSpecs />
  <TextArea />
  <ParseBtn />
  <TableQuasar
    :rows="store.state.rowsFirstTable"
    :cols="store.state.colsFirstTable"
    :isShown="store.state.showTable"
    :headerName="'Parsed data'"
    :tableName="'Sales report'"
  />
  <TableQuasar
    :rows="store.state.rowsSecondTable"
    :cols="store.state.colsSecondTable"
    :isShown="store.state.showTable"
    :headerName="'Summary'"
    :tableName="'Grouped by region'"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from './store'
import TaskSpecs from './TaskSpecs.vue'
import TextArea from './TextArea.vue'
import ParseBtn from './ParseBtn.vue'
import TableQuasar from './TableQuasar.vue'

export default defineComponent({
  name: 'App',
  components: { TaskSpecs, TextArea, ParseBtn, TableQuasar },
  data() {
    return {
      store: store,
    }
  },
})
</script>

<style lang="scss"></style>
