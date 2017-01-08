//https://www.codewars.com/kata/fizz-buzz-cuckoo-clock/train/javascript
function fizzBuzzCuckooClock(time) {
  let hours = parseInt(time.split(":")[0]),
    minutes = parseInt(time.split(":")[1]);

  //checking Cuckoo
  if (minutes === 0) {
    return checkCuckoo(hours);
  } else if (minutes === 30) {
    return "Cuckoo";
  }

  //checking Fizz
  if ((minutes % 3 === 0) && (minutes % 5 !== 0)) {
    return "Fizz";
    //checking Buzz
  } else if ((minutes % 5) === 0 && (minutes % 3 !== 0)) {
    return "Buzz";
    //checking Fizz Buzz with exceptions
  } else if ((minutes % 3 === 0) && (minutes % 5 === 0)) {
    return "Fizz Buzz";
    //checking tick
  } else {
    return "tick";
  }
}

// checking amount of Cuckoo
function checkCuckoo(hours) {
  console.log(hours);
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours==0) {
      hours = 12;
  }
  let arrayOfCuckoo = [];
  for (let i = 0; i < hours; i++) {
    arrayOfCuckoo.push("Cuckoo");
  }
  return arrayOfCuckoo.join(" ");
}
