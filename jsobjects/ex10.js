// New date after you change year to 2000 in the date 28th August 2008.
let dt = new Date("Aug 28, 2008 23:30:00");
dt.setFullYear(2000);
$("#resultdiv").text(dt);
