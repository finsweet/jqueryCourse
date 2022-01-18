// Press and hold the CTRL key and SPACE key to write a message to the text area.
// remove previous listeners
$("body").unbind("keydown");
// listener for the text area tag
$("body").on("keydown", function (event) {
  if (event.shiftKey && event.keyCode === 16) {
    // write to text area
    $("#field").val("Written by pressing CTRL and SPACE");
  }
});
