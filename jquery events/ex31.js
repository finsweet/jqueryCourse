// Hover over a list item to color it.
// listener for the li item
$("li").hover(function (event) {
  $(this).css("color", $(this).text());
});
