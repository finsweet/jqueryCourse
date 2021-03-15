// Move your mouse over the gray area to change its color. Move out to reverse the effect.
// listener for the gray area for mouse over event
$("#popUp").mouseover(function (event) {
  $(this).css("background-color", "black");
});
// listener for the gray area for mouse out event
$("#popUp").mouseout(function (event) {
  $(this).css("background-color", "gray");
});
