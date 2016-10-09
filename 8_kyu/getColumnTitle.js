//https://www.codewars.com/kata/get-the-excel-column-title/train/
function getColumnTitle(num) {
  var columnName = '';
  var modulo = 0;
  if (num < 1) {
    throw new IndexError;
  } else if (!Number.isInteger(num)) {
    throw new TypeError;
  }
  while (num > 0) {
    modulo = (num - 1) % 26;
    columnName = String.fromCharCode(65 + modulo) + columnName;
    num = Math.floor((num - modulo) / 26);
  }
  return columnName;
}
