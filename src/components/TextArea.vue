<template>
  <section>
    <h1>Input data</h1>
    <q-input class="txt" v-model="state.inputText" filled type="textarea" autogrow />
  </section>
</template>

<script lang="ts">
import { store } from './store'

export default {
  data() {
    return {
      state: store.state,
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
}
.txt {
  font-size: 1rem;
}
h1 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  margin-top: 3rem;
  text-align: center;
}
</style>
