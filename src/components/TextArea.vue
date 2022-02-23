<template>
  <h1>Input data</h1>
  <q-input class="txt" v-model="state.textareaText" filled type="textarea" autogrow />
</template>

<script>
import { store } from "./store.js";

export default {
  name: 'App',
  data() {
    return {
      state: store.state,
    };
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
  .txt {
    width: 100%;
    font-size: 1rem;
    margin: 1rem;
    background: transparent;
  }
  h1 {
    font-size: 1.5rem;
    line-height: 1;
    margin-top: 3rem;
  }
</style>
