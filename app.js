var theResult = document.getElementById("demo"),
  theResult2 = document.getElementById("notdemo"),
  year = document.getElementById("year"),
  month = document.getElementById("month"),
  day = document.getElementById("day"),
  mydate = new Date(),
  today = mydate.getDate(),
  mymonth = mydate.getMonth() + 1,
  myyear = mydate.getFullYear();

year.addEventListener("input", getthevalue);
month.addEventListener("input", getthevalue);
day.addEventListener("input", getthevalue);

function getthevalue() {
  var year1 = parseFloat(year.value) || 0,
    month1 = parseFloat(month.value) || 0,
    day1 = parseFloat(day.value) || 0,
    year2 = ((myyear - year1) * 365),
    month2 = (Math.abs(mymonth - month1) * 30),
    day2 = Math.abs(today - day1),
    plus = year2 + month2 + day2;
  if (year1 <= 0 || year1 >= 2017 || month1 <= (-1) || month1 >= 13 || day1 <= (-1) || day1 >= 32) {
    theResult.innerHTML = "enter valid value";
    theResult2.innerHTML = " ";
  } else {
    theResult.innerHTML = "You have lived about  " + plus + "   days.<br/> Equals to almost " + Math.round(plus / 12) + "  months." +
       "  <br/> Equals to almost " + Math.round(plus / 365) + "  years.";
  }

  theResult2.innerHTML = "Your next Birthday is in about  " + (month2 + day2) + " days";

};