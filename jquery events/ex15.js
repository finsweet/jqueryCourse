// Double click list item to change button color.
$("li").on("dblclick", function () {
  // get named color
  let text_color = $(this).text();
  // change the gray area div color to magenta
  $("#alertButton").css({ "background-color": text_color });
});
