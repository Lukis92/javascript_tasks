//https://www.codewars.com/kata/calculate-meal-total/train/javascript
function calculate_total(subtotal, tax, tip) {
  let result = subtotal + (subtotal*tax/100) + (subtotal*tip/100);
  return +result.toFixed(2);
}
