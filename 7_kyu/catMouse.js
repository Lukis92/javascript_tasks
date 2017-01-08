//https://www.codewars.com/kata/cat-and-mouse-easy-version/train/javascript
function catMouse(x){
  let c = x.toLowerCase().indexOf('c');
  let m = x.toLowerCase().indexOf('m');
  return (m+c >= 5) ? "Escaped!" : "Caught!";
}
