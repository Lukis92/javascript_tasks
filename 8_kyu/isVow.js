//https://www.codewars.com/kata/is-there-a-vowel-in-there/
function isVow(a) {
  for (var i = 0; i < a.length; i++) {
    //convert number to letter
    var char = String.fromCharCode(a[i]);
    if ('aeiou'.includes(char) === true) {
      a[i] = char;
    }
  }
  return a;
}
isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106])
//const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)
