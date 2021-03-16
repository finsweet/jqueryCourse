// Press and hold the shift key to reveal a message. Release the key to hide again.
// remove previous listeners
$("body").unbind("keydown");
$("body").unbind("keyup");
// listener for the body tag
$("body").on("keydown", function (event) {
  if (event.keyCode === 16 || event.charCode === 16) {
    // reveal message div
    $("#hiddenMessage").css("display", "flex");
  }
});

// key up listener
$("body").on("keyup", function (event) {
  if (event.keyCode === 16 || event.charCode === 16) {
    // hide message div
    $("#hiddenMessage").css("display", "none");
  }
});
