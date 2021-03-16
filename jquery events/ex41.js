// Resize your window to mobile size to hide the gray area div.
// remove previous window listeners
$(window).unbind();
// add resize listener to window
$(window).resize(function () {
  if ($(window).innerWidth() <= 991) {
    alert("Mobile size?");
  }
});
