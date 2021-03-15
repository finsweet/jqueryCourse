// Click the scroll bar to adjust the green scroll width.
$(".div-block-4").click(function (event) {
  // get the leftmost position of the bar
  let start_pos = $(".div-block-5").offset().left;
  // get the width the inner bar
  let widthc = $(".div-block-4").width();
  // calculate percentage on current click
  let curr_pos = event.pageX - event.target.offsetLeft + 50;
  let percentage = ((curr_pos - start_pos) / widthc) * 100;
  // adjust your green bar
  $(".div-block-5").css("width", percentage + "%");
});
