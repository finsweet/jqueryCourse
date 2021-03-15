// Hover the list to underline an item. Move out to reverse the effect.
// listener for the li with hover event
$("li").hover(
  function () {
    $(this).css("text-decoration", "line-through");
  },
  function () {
    $(this).css("text-decoration", "none");
  }
);
