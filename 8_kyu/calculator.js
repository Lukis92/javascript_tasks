//https://www.codewars.com/kata/simple-calculator/train/javascript
function calculator(a, b, sign) {
  if (isNaN(a) || isNaN(b))
    return "unknown value";
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return "unknown value";
  }
}

//Alternative
function calculator(x, y, sign) {
  var fnMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  }
  if (isNaN(x) || isNaN(y) || !fnMap[sign]) {
    return "unknown value";
  }
  return fnMap[sign](x, y);
}

const calculator = (a,b,sign) => !isNaN(a)&&!isNaN(b)&&['+','-','*','/','%'].includes(sign) ? eval(a+sign+b) : "unknown value"
