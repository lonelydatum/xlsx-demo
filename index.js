var XLSX = require('xlsx');
var workbook = XLSX.readFile('excel.xlsx');

var first_sheet_name = workbook.SheetNames[0];
var address_of_cell = 'D5';

/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];

/* Find desired cell */
var desired_cell = worksheet[address_of_cell];

/* Get the value */
var desired_value = desired_cell.v;

console.log(desired_cell.v);