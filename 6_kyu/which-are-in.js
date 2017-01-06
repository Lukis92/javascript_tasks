//https://www.codewars.com/kata/which-are-in/train/
function inArray(array1, array2) {
  var result = [],
    hash = {};
  for (var i in array1) {
    for (var j in array2) {
      if (array2[j].indexOf(array1[i]) !== -1)
        hash[array1[i]] += 1;
    }
  }

  for (var k in hash)
    result.push(k);

  return result.sort();
}
