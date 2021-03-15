// Press and hold the hide button to change its color.
// listener for the hide button for mouse down event
$("#counter").mousedown(function (event) {
  $(this).css({ "background-color": "#0000A0" });
});
// mouse up event to show hidden value when button is released
$("#counter").mouseup(function (event) {
  $(this).css({ "background-color": "#3898ec" });
});
