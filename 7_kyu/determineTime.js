//https://www.codewars.com/kata/can-santa-save-christmas/train/javascript
function determineTime(durations) {
  let hours = 0, minutes = 0, seconds = 0,
      sum = []; // an array of converted times

  //getting times from item in an array
  for (let i of durations) {
    let arr = i.split(":");
    hours += parseInt(arr[0]);
    minutes += parseInt(arr[1]);
    seconds = parseInt(arr[2]);
  }
  //adding part of the time to array 'sum'
  sum.push(hours);
  sum.push(minutes);
  sum.push(seconds);
  //convert to correct time
  let result = convertion(sum[0], sum[1], sum[2]);

  //checking if time is more than 24 hours.
  if (result[0] === 24 && result[1] > 0 || result[0] > 24)
    return false;
  else
    return true;
}

//Convert overflow of time into hours, minutes.
function convertion(hours, minutes, seconds) {
  let h = 0, min = 0, sec = 0;
  if (seconds / 60 > 0) {
    let addMinutes = seconds / 60;
    min = minutes + addMinutes;
    sec = seconds % 60;
  }

  if (minutes / 60 > 0) {
    let addHours = minutes / 60;
    h = hours + addHours;
    min = minutes % 60;
  }

  return [h, min, sec];
}
