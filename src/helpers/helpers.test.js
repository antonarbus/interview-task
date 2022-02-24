import { isDataOk, getColsForTable1, getRowsForTable1, getRowsForTable2 } from './helpers'

test('check if input data is ok or not', () => { 
  expect(isDataOk(`OrderDate;Region;Rep;Item;Units;Unit Cost
  1.1.2021;East;Johns;Pencil;95;1,99`)).toBe(true)
  expect(isDataOk(`OrderDate;Region;Rep;Item;Units;Unit Cost
  1.1.2021;East;Johns;Pencil;95;1,99
  
  `)).toBe(true)
  expect(isDataOk(`OrderDate;Region;Rep;Item;Units;Unit Cost
  1.1.2021;East;Johns;Pencil;95;1.99`)).toBe(true)
  expect(isDataOk(`OrderDate;Region;Rep;Item;Units;Unit Cost
  1.1.2021;East;Johns;Pencil;95;`)).toBe(false)
  expect(isDataOk(`OrderDate;Region;Rep;Item;Units;Unit Cost
  1.1.2021;;;;95;1.99`)).toBe(true)
  expect(isDataOk(`OrderDate;Region;Rep;Item;Units;Unit Cost
  1.1.2021;East;Johns;Pencil;1,99`)).toBe(false)
  expect(isDataOk(`;Region;Rep;Item;Units;Unit Cost
  1.1.2021;East;Johns;Pencil;95;1,99`)).toBe(false)
})

const colsOutput = [
  {name: 'OrderDate', label: 'OrderDate', field: 'OrderDate', align: 'center', sortable: false},
  {name: 'Region', label: 'Region', field: 'Region', align: 'center', sortable: false},
  {name: 'Rep', label: 'Rep', field: 'Rep', align: 'center', sortable: false},
  {name: 'Item', label: 'Item', field: 'Item', align: 'center', sortable: false},
  {name: 'Units', label: 'Units', field: 'Units', align: 'center', sortable: false},
  {name: 'Unit Cost', label: 'Unit Cost', field: 'Unit Cost', align: 'center', sortable: false}
]
test('return certain array for columns', () => { 
  expect(getColsForTable1(`OrderDate;Region;Rep;Item;Units;Unit Cost
  1.1.2021;East;Johns;Pencil;95;1,99`)).toEqual(colsOutput)
  expect(getColsForTable1(`OrderDate;Region;Rep;Item;Units;Unit Cost`)).toEqual(colsOutput)
  expect(getColsForTable1(`OrderDate;         Item;Units;Unit Cost`)).not.toEqual(colsOutput)
})

const rowsOutputTable1 = [ {Item: "Pencil", OrderDate: "01.01.2021", Region: "East", Rep: "Johns", 'Unit Cost': 1.99, Units: 95} ]
test('return certain array for rows', () => { 
  expect(getRowsForTable1(`OrderDate;Region;Rep;Item;Units;Unit Cost
  1.1.2021;East;Johns;Pencil;95;1,99`)).toEqual(rowsOutputTable1)
})

const rowsOutputTable2 = [ 
  {'Last OrderDate': '01.01.2021', Region: 'East', 'Total Units': 95, 'Total Cost': 189.05},
  {'Last OrderDate': '31.12.2020', Region: 'West', 'Total Units': 500, 'Total Cost': 570},
  {'Last OrderDate': '10.10.2018', Region: 'North', 'Total Units': 185, 'Total Cost': 12170},
]
test('return certain array for rows', () => { 
  expect(getRowsForTable2(`
  OrderDate;Region;Rep;Item;Units;Unit Cost
  1.1.2021;East;Johns;Pencil;95;1,99
  31.12.2020;West;Emma;Pen;50;2,4
  15.6.2019;West;Nick;Paper;450;1,0
  10.10.2018;North;Amanda;Pistol;5;500
  6.6.2017;North;Rami;Boots;80;89.5
  05.05.2018;North;Patrik;Hammer;100;25,1
  `)).toEqual(rowsOutputTable2)
})
