// Press your keyboard to count the number of times the event has fired.
let count = 0;
// listener for the body tag
$("body").keypress(function () {
  count++;
  $("#position").css("display", "flex");
  $("#position").text("Press count: " + count);
});
