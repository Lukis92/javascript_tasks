//https://www.codewars.com/kata/fake-binary/train/javascript
function fakeBin(x){
  return x.split('').map(e => e < 5 ? '0' : '1').join('');
}
