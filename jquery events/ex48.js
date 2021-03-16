// Press and hold key to write a message to a div.
// remove previous listeners
$("body").unbind("keydown");
$("body").unbind("keyup");
// listener for the body tag
$("body").on("keydown", function () {
  // reveal message div
  $("#message").css("display", "flex");
  // append messages to div
  $("#message").append("keyboard press");
});
