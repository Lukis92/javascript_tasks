//https://www.codewars.com/kata/holiday-v-seasick-snorkelling/train/javascript
function seaSick(x) {
  let change = 0;
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i + 1] !== x[i]) {
      change++;
    }
  }

  return (change > x.length * 0.2) ? "Throw Up" : "No Problem";
}

//Alternative
return s.split("").filter((e, i) => (e === "~" && s[i + 1] === "_") ||
  (e === "_" && s[i + 1] === "~")).length > 0.2 * s.length ? "Throw Up" : "No Problem";
