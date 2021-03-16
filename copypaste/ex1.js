// Press duplicate to clone the popup div.
$("#duplicate").click(() => {
  let gray_div = $("#popUp");
  // duplicate on parent
  gray_div.parent().append(gray_div.clone());
});
