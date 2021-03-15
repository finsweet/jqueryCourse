// Click the  alert button to hide and show the gray area.
// change text of button
$("#alertButton").text("hide gray area");
// listener for button
$("#alertButton").on("click", function () {
  // check if gray area visible
  if ($("#popUp").is(":visible")) {
    // hide the gray area
    $("#popUp").hide();
    $("#alertButton").text("show gray area");
  } else {
    // show the gray area
    $("#popUp").show();
    $("#alertButton").text("hide gray area");
  }
});
