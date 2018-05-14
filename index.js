// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}
happyHolidays();

function happyHolidaysTo(you){
  return `Happy holidays, ${you}!`
}


function happyHolidaysTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

happyHolidaysTo("Christmas", "Grandma");

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown("Christmas", 300)
