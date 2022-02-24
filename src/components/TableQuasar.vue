<template>
  <section v-if="isShown">
    <h1>{{ headerName }}</h1>
    <div class="q-pa-md custom-class">
      <q-table :title="tableName" :rows="rows" :columns="cols" :row-key="tableName" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type RowsType from '@/types/RowsTypeTable1'
import type ColsType from '@/types/ColsType'

export default defineComponent({
  props: {
    rows: {
      required: true,
      type: Array as PropType<RowsType[]>,
    },
    cols: {
      required: true,
      type: Array as PropType<ColsType[]>,
    },
    isShown: {
      required: true,
      type: Boolean,
    },
    tableName: {
      required: false,
      type: String,
    },
    headerName: {
      required: false,
      type: String,
    },
  },
})
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
