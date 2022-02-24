import { reactive } from "vue";
import initText from "./initText";

export const store = {
  state: reactive({
    textareaText: initText,
    cols: [],
    rows: [],
    showTable: false
  })
}
