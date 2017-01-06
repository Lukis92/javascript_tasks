//https://www.codewars.com/kata/last/train/javascript
function last(list) {
  if (arguments.length > 0) {
    return arguments[arguments.length - 1];
  }
  if (list instanceof Array || typeof list === 'string') {
    return list[list.length - 1];
  } else {
    return list;
  }
}
