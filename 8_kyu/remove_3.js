//https://www.codewars.com/kata/exclamation-marks-series-number-4-remove-all-
//exclamation-marks-from-sentence-but-ensure-a-exclamation-mark-at-the-end-of-
//string/train/javascript
function remove(s, n) {
  for (var i = 0; i < n; i++) {
    s = s.replace('!', '');
  }
  return s;
}
