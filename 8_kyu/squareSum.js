//https://www.codewars.com/kata/square-n-sum/train/javascript
function squareSum(numbers) {
  return numbers.map(x => Math.pow(x, 2)).reduce((a, b) => a + b, 0);
}

//Alternative
let squareSum = numbers => numbers.map(x => Math.pow(x, 2)).reduce((a, b) => a + b, 0);
