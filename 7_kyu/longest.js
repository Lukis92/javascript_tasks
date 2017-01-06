//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
function longest(s1, s2) {
  //filter - creates anarray filled with elements that pass a test
  //indexOf - returns the position of the first occurrence(index)
  return s1.concat(s2).split('').filter((currentValue, index, arr) => arr.indexOf(currentValue) === index).sort().join("");
}
