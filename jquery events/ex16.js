// Double click list item to change to its named color.
// declare function for double click event
function doubleClick(event) {
  // get named color
  let named_color = $(this).text();
  // if color clicked is already applied change it to default black color
  $(this).css("color", named_color);
}
$("body").on("dblclick", "li", doubleClick);
