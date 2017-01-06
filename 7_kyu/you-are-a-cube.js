//https://www.codewars.com/kata/you-are-a-cube/
function youAreACube (value){
  return Math.pow(Math.ceil((Math.pow(value, 1.0/3.0))), 3) === value
}
