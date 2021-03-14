// Change ist colors according to array
let colours = ["red", "purple", "magenta"];
colours.forEach((item, index) => {
  $("li").eq(index).css("color", item);
});