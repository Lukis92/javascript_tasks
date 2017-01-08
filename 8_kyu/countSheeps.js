//https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript
function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let x of arrayOfSheep)
    if (x === true) count += 1;
  return count;
}
//Alternative
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
