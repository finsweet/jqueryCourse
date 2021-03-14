if (Cookies.get("username")) {
  $("#email-form").hide();
  $(".welcome").show();
} else {
  $("#email-form").show();
  $(".welcome").hide();
}
// set cookie when for is submitted
$("#email-form").submit(function () {
  let name = $("#name").val();
  Cookies.set("username", name);
});
