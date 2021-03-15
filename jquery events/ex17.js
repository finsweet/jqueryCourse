// Double click and hold the hide button to hide the number
// listener for the hide button for mouse down event
$("#counter").mousedown(function (event) {
  $("#counter-value").hide();
});
// mouse up event to show hidden value when button is released
$("#counter").mouseup(function (event) {
  $("#counter-value").show();
});
