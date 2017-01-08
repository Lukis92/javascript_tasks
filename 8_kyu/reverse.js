//https://www.codewars.com/kata/reversing-words-in-a-string/train/javascript
function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

//Alternative
reverse = s => s.split(" ").reverse().join(" ");
