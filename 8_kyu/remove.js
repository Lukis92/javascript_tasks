//https://www.codewars.com/kata/exclamation-marks-series-number-1-remove-a-
//exclamation-mark-from-the-end-of-string/train/javascript
function remove(s){
  return s.charAt(s.length-1) === "!" ? s.substr(0, s.length-1) : s;
}
