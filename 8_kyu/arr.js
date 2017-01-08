//https://www.codewars.com/kata/filling-an-array-part-1/train/javascript
function arr(n) {
  let array = [];
  for(let i = 0; i < n; i++){
    array.push(i);
  }
  return array;
}

//Alternative:
const arr = n => Array.from({length: n}, (_, k) => k);
