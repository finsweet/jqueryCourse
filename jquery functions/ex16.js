// Change text color to red for all list items that start with "L" .
$(".list > li").each(function () {
  if ($(this).text().startsWith("L")) {
    $(this).css("color", "red");
  }
});