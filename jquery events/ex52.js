// Disabled keyboard!
// remove all binded keyboard events
$("body").unbind("keypress");
// listener for the window tag
$(window, "body").keypress(function (event) {
  // prevent keypress
  event.preventDefault();
});
