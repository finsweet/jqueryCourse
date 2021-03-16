// Get the day of the week given the date 25th December 1995.
let dt = new Date("December 25, 1995 23:15:00");
let day_of_week = dt.getDay();
$("#resultdiv").text(day_of_week);
