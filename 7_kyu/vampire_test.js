//https://www.codewars.com/kata/vampire-numbers-1/
var vampire_test = function(a, b) {
  var result = multiply(a, b);
  var arr = getArrayOfNum(result);
  var arr_a = getArrayOfNum(Math.abs(a));
  var arr_b = getArrayOfNum(Math.abs(b));

  var sum = arr_a.concat(arr_b);

  if (arraysIdentical(arr, sum) && doubleNegative(a, b)) {
    return true;
  } else {
    return false;
  }
}

//returns result of multiply
function multiply(a, b) {
  return a * b;
}

// checking if two numbers are negative
function doubleNegative(a, b) {
  if (!(a < 0 && b < 0)) return true;

}

// comparing two arrays
function arraysIdentical(a, b) {
  a = a.sort();
  b = b.sort();
  var i = a.length;
  if (i != b.length) return false;
  while (i--) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// split number into digits and puts to array
function getArrayOfNum(num) {
  num = Math.abs(num);
  var output = [],
    sNumber = num.toString();

  for (var i = 0; i < sNumber.length; i++) {
    output.push(+sNumber.charAt(i));
  }
  return output;
}
