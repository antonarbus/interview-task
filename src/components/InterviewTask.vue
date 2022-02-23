<template>
  <TaskSpecs />
  <TextArea />
  <ParseBtn />
  <TableMain />
  <TableSummary />
</template>

<script>

  import { store } from "./store.js";
  console.log(store.state)

  import { defineComponent } from 'vue';
  import GeneralTable from './GeneralTable.vue'
  import TaskSpecs from './TaskSpecs.vue'
  import TextArea from './TextArea.vue'
  import ParseBtn from './ParseBtn.vue'
  import TableMain from './TableMain.vue'
  import TableSummary from './TableSummary.vue'

  export default defineComponent({
    name: 'App',
    components: { TaskSpecs, TextArea, ParseBtn, TableMain, TableSummary, GeneralTable },
    data() {
      return {
        dataFromStore: store.state,
        message: store.state,

        showTable: false,
        parsedData: [],
        tableColumns:[],
        tableRows: [],
      };
    },
    methods: {
      appendToDataFromStore() {
        store.appendText()
      },

      parseData() {
        this.parsedData = this.message.textareaText.split("\n");
        if (this.parsedData.length > 0) {
          this.tableColumns = this.parseColumns(this.parsedData);
          this.getTableRows();
          this.showTable = true;
        }
      },

      parseColumns() {
        const parsedColumnsTitles = this.parsedData[0].split(";");
        const tableColumns = [];
        for (const column of parsedColumnsTitles) {
          tableColumns.push ({
            name: column,
            align: 'center',
            label: column,
            field: column,
            sortable: true,
          })
        }
        return tableColumns
      },


      getTableRows() {
        const rowsWithoutTitle = this.parsedData.slice(1);
        for (const row of rowsWithoutTitle) {
          const rowParsedData = row.split(';');
          const newRow = {};
            for (const [index, column] of this.tableColumns.entries()) {
              newRow[column.name] = rowParsedData[index];
              if (!isNaN(Date.parse(rowParsedData[index]))) {
                this.tableColumns[index].sort = (a, b) => new Date(a.split(".").reverse().join(".")).getTime() - new Date(b.split(".").reverse().join(".")).getTime();
              }
              if (!isNaN(parseInt(rowParsedData[index]))) {
                this.tableColumns[index].sort = (a, b) => parseInt(a, 10) - parseInt(b, 10)
              }
              if (!isNaN(parseFloat(rowParsedData[index]))) {
                this.tableColumns[index].sort = (a, b) => Math.round(parseFloat(a)) - Math.round(parseFloat(b))
              }
            }
          this.tableRows.push(newRow);
        }
        console.log('this.tableColumns')
        console.log(this.tableColumns)
        console.log('this.tableRows')
        console.log(this.tableRows)
      }
    },
  });

</script>

<style lang="scss">


</style>
