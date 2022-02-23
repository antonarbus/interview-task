<template>
  <h1>Assignment</h1>
  <q-card class="my-card">
    <q-card-section>
      <ol>
        <li>Add a textarea where users can type or paste comma-separated data.</li>
        <li>Add a button that can be used to initiate parsing of data from the textarea.</li>
        <li>Add a table component that displays a summary of the parsed data (the table can be initially hidden, the design is up to you)</li>
        <li>Summary table should group data per region with the following columns: Last OrderDate, Region, Total Units; Total Cost</li>
      </ol>
    </q-card-section>
  </q-card>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .my-card {
    width: 100%;
    font-size: 1rem;
    margin: 1rem;
  }
  h1 {
    font-size: 1.5rem;
    line-height: 1;
    margin-top: 3rem;
  }
</style>


