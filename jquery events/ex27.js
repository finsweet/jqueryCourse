// Move your mouse over the list to change the color of gray area div.
// listener for the li with mouse over event
$("li").mouseover(function (event) {
  // get list color
  let color_name = $(this).text();
  //change color of gray area div
  $("#popUp").css("background-color", color_name);
  // change text on the gray area div
  $("#popUp").text(color_name + " Area");
});
