//https://www.codewars.com/kata/simple-multiplication/train/javascript
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8)
}

const simpleMultiplication = n => n * (n % 2) ? 9 : 8
