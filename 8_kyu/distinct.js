//https://www.codewars.com/kata/remove-duplicates-from-list/train/javascript
function distinct(a) {
  return a.filter(onlyUnique);
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

//Alternative
function distinct(a) {
  return Array.from(new Set(a));
}
