import { reactive } from "vue";
import initText from "./initText";

export const store = {
  state: reactive({
    textareaText: initText,
    showTable: false,
    btnClass: 'not-shaking',
    btnText: 'Parse text',
    rowsFirstTable: [],
    rowsSecondTable: [],
    colsFirstTable: [],
    colsSecondTable: [],
  })
}
