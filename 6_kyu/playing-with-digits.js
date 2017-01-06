//https://www.codewars.com/kata/playing-with-digits/
function digPow(n, p) {
  var digits = n.toString().split('');
  //convert strings to number in array
  var realDigits = digits.map(Number);
  var result = 0;

  for (var i in realDigits) {
    result += Math.pow(realDigits[i], p);
    p += 1;
  }

  if (result % n == 0) {
    return result / n;
  } else {
    return -1;
  }

}
