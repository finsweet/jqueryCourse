// Hover your mouse on the gray area to change its color. Hover out to revert to the original color.
// listener for the gray area for hover event
$("#popUp").hover(
  function () {
    $(this).css("background-color", "red");
  },
  function () {
    // revert to original color on hover stops
    $(this).css("background-color", "gray");
  }
);
