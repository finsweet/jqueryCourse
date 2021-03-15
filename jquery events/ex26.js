// Move your mouse over the list to color it.
// listener for the li with mouse over event
$("li").mouseover(function (event) {
  $(this).css("color", $(this).text());
});
