// Scroll  the list area to add more list items.
// listener for the list
$("#color-list").scroll(function (event) {
  // add list items
  $("#color-list").append("<li>Another color..</li>");
});
