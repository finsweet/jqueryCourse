// Click the scroll button to automatically scroll  the list.
// listener for the list
$(".w-button").click(function () {
  $("#color-list").animate(
    { scrollTop: $("#color-list").prop("scrollHeight") },
    1000
  );
});
