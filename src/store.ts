import { reactive } from 'vue'
import initText from '@/initText'
import type RowsTypeTable1 from '@/types/RowsTypeTable1'
import type RowsTypeTable2 from '@/types/RowsTypeTable2'
import type ColsType from '@/types/ColsType'

const store = {
  state: reactive({
    inputText: initText as string,
    showTable: false as boolean,
    btnClass: 'not-shaking' as string,
    btnText: 'Parse text' as string,
    colsTable1: [] as ColsType[],
    rowsTable1: [] as RowsTypeTable1[],
    colsTable2: [] as ColsType[],
    rowsTable2: [] as RowsTypeTable2[],
  }),
}

export default store
