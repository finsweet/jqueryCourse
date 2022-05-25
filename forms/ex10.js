// Fill the email field in the form to see when the change event is triggered.
$("#email-form").change(function () {
  $(".message").css("display", "flex").css("color", "orange");
  $(".message").text("You have modified the form!");
});