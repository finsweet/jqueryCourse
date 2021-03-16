// Press and hold a key to write a message to a div. Release the key to erase everything.
// remove previous listeners
$("body").unbind("keydown");
$("body").unbind("keyup");
// reveal message div
$("#message").css("display", "flex");
// listener for the body tag
$("body").on("keydown", function () {
  // append to messages div
  $("#message").append("keyboard press");
});

// key up listener
$("body").on("keyup", function () {
  // remove text from messages div
  $("#message").html("");
});
