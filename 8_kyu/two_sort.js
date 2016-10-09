//https://www.codewars.com/kata/sort-and-star/
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

if((typeof alert) === 'undefined') {
    global.alert = function(message) {
        console.log(message);
    }
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])
