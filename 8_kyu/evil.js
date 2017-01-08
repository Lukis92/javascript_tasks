//https://www.codewars.com/kata/evil-or-odious/train/javascript
function evil(n) {
  let binary = Number(n).toString(2); //Convert number to binary
  let count = 0;
  for(let i = 0; i < binary.length; i++){
    if(binary.charAt(i) === "1"){
      count++;
    }
  }
  return (count % 2 === 0) ? "It's Evil!" : "It's Odious!";
}
