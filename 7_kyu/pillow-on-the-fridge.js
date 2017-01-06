//https://www.codewars.com/kata/pillow-on-the-fridge/
function pillow(s) {
  var arr1 = s[0].split(""),
    arr2 = s[1].split("");

  var arr1_ind = getAllIndexes(arr1, 'n');
  var arr2_ind = getAllIndexes(arr2, 'B');

  if ((intersection(arr1_ind, arr2_ind).length > 0) && (arr1_ind.length > 0 && arr2_ind.length > 0)) {
    return true;
  } else {
    return false;
  }
}

//getting all indexes of val
function getAllIndexes(arr, val) {
  var indexes = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      indexes.push(i);
    }
  }
  return indexes;
}

//common elements of two arrays
function intersection(a, b) {
  var rs = [],
    x = a.length;
  while (x--) b.indexOf(a[x]) != -1 && rs.push(a[x]);
  return rs.sort();
}

/*
Better solution:
function pillow(s){
  for (var i in s[1]) {
    if (s[0][i] == 'n' && s[1][i] == 'B') return true
  }
  return false
}
*/
