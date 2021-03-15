// Scroll  the list area to change size of text.
// initialize font size
let x = 10;
// listener for the list
$("#color-list").scroll(function (event) {
  // show the hidden text
  $("#position").css("display", "flex");
  // limit font to 30px
  if (x <= 30) {
    x++;
  }
  $("#position").text("font size: " + x);
  $("#position").css("font-size", x + "px");
});
