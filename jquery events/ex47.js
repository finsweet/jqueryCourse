// Press and hold key to write a message to a div.
// listener for the body tag
$("body").keydown(function () {
  // reveal message div
  $("#message").css("display", "flex");
  // append messages to div
  $("#message").append("keyboard press");
});
