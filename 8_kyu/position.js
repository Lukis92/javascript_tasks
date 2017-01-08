//https://www.codewars.com/kata/find-the-position/train/javascript
function position(letter) {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z"
  ];
  return `Position of alphabet: ${alphabet.indexOf(letter)+1}`;
}
