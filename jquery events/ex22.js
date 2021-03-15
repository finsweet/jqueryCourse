// Press and hold the start timer button to start our stop watch
//change label for button
$("#counter").text("Start timer");
// remove any previous bound webflow events
$("#counter").unbind();
// reduce font size
$("#counter-value").css("font-size", "15px");
// initialize setInteval variable
let interval;
$("#counter").mousedown(function (event) {
  let time = 0;
  // a loop that executes after every 100 milliseconds
  interval = setInterval(function () {
    time = time + 100;
    $("#counter-value").text(time / 1000 + "s");
  }, 100);
});
// mouse up event to show hidden value when button is released
$("#counter").mouseup(function (event) {
  // remove the 0.1 second loop
  clearInterval(interval);
});
