// Get month in numeral give the data 25th December 1995.
let dt = new Date("December 25, 1995 23:15:00");
let month = dt.getMonth();
$("#resultdiv").text(month);
