<template>
  <TaskSpecs />
  <TextArea />
  <ParseBtn />
  <TableFirst />
  <TableSecond />
</template>

<script>
  import { defineComponent } from 'vue';
  import TaskSpecs from './TaskSpecs.vue'
  import TextArea from './TextArea.vue'
  import ParseBtn from './ParseBtn.vue'
  import TableFirst from './TableFirst.vue'
  import TableSecond from './TableSecond.vue'

  export default defineComponent({
    components: { TaskSpecs, TextArea, ParseBtn, TableFirst, TableSecond },
  });
</script>

<style lang="scss">
</style>
