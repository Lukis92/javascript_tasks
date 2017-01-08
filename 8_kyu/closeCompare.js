//https://www.codewars.com/kata/compare-within-margin/train/javascript
function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}
