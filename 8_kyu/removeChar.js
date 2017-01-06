//https://www.codewars.com/kata/remove-first-and-last-character/train/javascript
function removeChar(str) {
  return str.slice(1, -1);
};

//Alternatives
const removeChar = str => str.slice(1, -1);

const removeChar = str => str.replace(/^.|.$/g, -1);
