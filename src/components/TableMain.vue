<template>
  <!-- <h1>Parsed data</h1> -->
  <div class="q-pa-md custom-class" v-if="store.showTable">
    <q-table
      title="Sales report"
      :rows="store.rows"
      :columns="store.cols"
      row-key="name"
    />
  </div>
</template>

<script>
import { store } from "./store.js";

export default {
  name: 'App',
  data() {
    return {
      store: store.state,
    };
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 1.5rem;
    line-height: 1;
    margin-top: 3rem;
  }
  .q-pa-md {
    padding: 0px;
    margin: 2rem 0rem;
    width: 100%;
  }
</style>
