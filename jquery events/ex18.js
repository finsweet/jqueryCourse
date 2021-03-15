// Press and hold the show button to reveal the hidden text.
$("#counter").text("show");
// listener for the show button for mouse down event
$("#counter").mousedown(function (event) {
  $("#hidden-text").show();
});
// mouse up event to hide text value when button is released
$("#counter").mouseup(function (event) {
  $("#hidden-text").hide();
});
