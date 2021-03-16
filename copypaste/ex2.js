// Press duplicate to copy style from the gray pop up div.
$("#duplicate").click(() => {
  let gray_div_classname = $("#popUp").attr("class");
  // copy to wannabe
  $(".popup-wannabe").removeClass().addClass(gray_div_classname);
});
