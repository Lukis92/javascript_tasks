//https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/
function countPositivesSumNegatives(input) {
  var sum = 0;
  var count = 0;
  var result = [];

  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach(function(i) {
      i > 0 ? count++ : i < 0 ? sum += i : sum += 0;
    });
    result = [count, sum];
    return result;
  }
}
