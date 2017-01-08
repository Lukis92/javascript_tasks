//https://www.codewars.com/kata/naughty-or-nice-2/train/javascript
function whatListAmIOn(actions) {
 let countNaughty = 0, countNice = 0;

 for (let i of actions) {
  if (/[bfk]/.test(i.substring(0,1))) countNaughty++;
  if (/[gsn]/.test(i.substring(0,1))) countNice++;
 }

 return (countNaughty >= countNice) ? "naughty" : "nice";
}
