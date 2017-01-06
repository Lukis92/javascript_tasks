//https://www.codewars.com/kata/find-numbers-with-same-amount-of-divisors/
function countPairsInt(diff, nMax) {
  var i = 1,
    pairs = 0;

  while (i + diff < nMax) {
    if (countDivisors(i) == countDivisors(i + diff)) pairs += 1;
    i += 1;
  }
  return pairs;
}

function countDivisors(n) {
  var i = 2,
    count = 1;
  while (i <= n) {
    if (n % i == 0) count += 1;
    i++;
  }
  return count;
}
