//https://www.codewars.com/kata/holiday-viii-duty-free/train/javascript
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/(normPrice*discount/100));
}
