import { reactive } from 'vue'
import initText from './initText'
import type RowsType from '@/types/RowsTypeTable1'
import type ColsType from '@/types/ColsType'

export const store = {
  state: reactive({
    inputText: initText as string,
    showTable: false as boolean,
    btnClass: 'not-shaking' as string,
    btnText: 'Parse text' as string,
    rowsFirstTable: [] as RowsType[],
    rowsSecondTable: [] as RowsType[],
    colsFirstTable: [] as ColsType[],
    colsSecondTable: [] as ColsType[],
  }),
}
