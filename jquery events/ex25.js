// Move your mouse over the list to underline an item. Move out to reverse the effect.
// listener for the li with mouse over event
$("li").mouseover(function (event) {
  $(this).css("text-decoration", "underline");
});
// listener for the gray area for mouse out event
$("li").mouseout(function (event) {
  $(this).css("text-decoration", "none");
});
