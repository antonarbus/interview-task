<template>
  <section v-if="store.showTable">
    <h1>Parsed data</h1>
    <div class="q-pa-md custom-class">
      <q-table
        title="Sales report"
        :rows="store.rowsFirstTable"
        :columns="store.colsFirstTable"
        row-key="name"
      />
    </div>
  </section>
</template>

<script>
import { store } from "./store.js";

export default {
  data() {
    return {
      store: store.state,
    };
  },
}
</script>

<style lang="scss" scoped>
  section {
    width: 100%;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    margin-top: 3rem;
    text-align: center;
  }
  .q-pa-md {
    padding: 0px;
    margin: 1rem 0rem;
    width: 100%;
  }
</style>
