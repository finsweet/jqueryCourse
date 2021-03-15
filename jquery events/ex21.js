// Double click and hold the increase button to update the counter
//change label for button
$("#counter").text("increase counter");
// initialize setInteval variable
let interval;
$("#counter").mousedown(function (event) {
  let count = $("#counter-value").text();
  // a loop that executes after every 0.5 second
  interval = setInterval(function () {
    count++;
    $("#counter-value").text(count);
  }, 500);
});
// mouse up event to show hidden value when button is released
$("#counter").mouseup(function (event) {
  // remove the 0.5 second interval loop
  clearInterval(interval);
});
