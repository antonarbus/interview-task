<template>
  <div class="table-2">
    <q-table
      title="Treats 2"
      :rows="newTableRows"
      :columns="newTableColumns"
      row-key="name"
    />
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      tableRows: {
        type: Array,
        required: true,
      },
      tableColumns: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        newTableRows:[],
        newTableColumns: [],
      };
    },
    created() {
      this.newTableRows = this.tableRows;
      this.newTableColumns = this.tableColumns;
    }
  });
</script>

<style lang="scss">
  .table-2 {
    margin-top: 25px;
  }
</style>
