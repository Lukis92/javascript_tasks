//https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript
function digitize(n) {
  return ("" + n).split('').map(e => parseInt(e)).reverse();
}
