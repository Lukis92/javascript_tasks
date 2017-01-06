//https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all/train/javascript
function howMuchILoveYou(nbPetals) {
  var arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return arr[(nbPetals - 1) % arr.length];
}
