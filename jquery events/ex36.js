// Scroll  the list  to fade the scroll button.
// initial opacity of the button
button_opacity = 1;
// listener for the list
$("#color-list").scroll(function (event) {
  // decrease button opacity by 0.1
  button_opacity = button_opacity - 0.1;
  // add list items
  $(".demo-button").css({ opacity: button_opacity });
});
