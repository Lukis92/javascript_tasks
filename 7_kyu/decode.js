//https://www.codewars.com/kata/emilys-eccentric-encoding/train/javascript
function decode(str) {
  let max = 122;
  let min = 97;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.CharCodeAt(i);
    code = max - code;
    code = min + code;

    if (code >= min && code <= max) {
      let char = String.fromCharCode(code);
      result += char;
    }

    if (code < min || code > max) {
      result += str[i];
    }
  }
  return result;
}
