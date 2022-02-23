import { reactive } from "vue";

export const store = {
  state: reactive({
    myText: 'hello, I am your data',
    textareaText: "OrderDate;Region;Rep;Item;Units;Unit Cost\n6.1.2021;East;Johns;Pencil;95;1,99\n7.9.2020;West;Emma;Pen;50;2,4\n17.2.2020;West;Nick;Paper;450;1,0",
    parsedData: null,
    cols: [],
    rows: [],
    showTable: false
  }),
  appendText() {
    this.state.myText = this.state.myText + ' new text'
    console.log(this.state.myText)
  }
};