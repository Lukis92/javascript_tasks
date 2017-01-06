//https://www.codewars.com/kata/for-ufc-fans-total-beginners-conor-mcgregor-vs-george-saint-pierre/train/javascript
var quote = function(fighter) {
  return fighter.toUpperCase() === 'GEORGE SAINT PIERRE' ? 'I am not impressed by your performance.' :
    "I'd like to take this chance to apologize.. To absolutely NOBODY!"
};

//Alternative
const quote = fighter =>
  fighter.toUpperCase() === 'GEORGE SAINT PIERRE' ? 'I am not impressed by your performance.' :
  "I'd like to take this chance to apologize.. To absolutely NOBODY!";
