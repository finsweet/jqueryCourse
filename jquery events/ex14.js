// Double click to change list item color
$("li").on("dblclick", function () {
  // get named color
  let text_color = $(this).text();
  // change this list item color
  $(this).css("color", text_color);
});
