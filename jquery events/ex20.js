// Double click and hold the delete button to delete it
//change label for button
$("#counter").text("delete this!");
// listener for the hide button for mouse down event
$("#counter").mousedown(function (event) {
  $(this).hide();
});
