//https://www.codewars.com/kata/calculate-average/train/javascript
function find_average(array) {
  var sum = array.reduce((a, b) => return a + b, 0);
  return sum / array.length;
}
