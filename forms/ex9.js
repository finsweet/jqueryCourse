// Fill the form and the code will validate if everything is perfect. Press run to try again.
if ($("#name").val() === "") {
  $(".message").css("display", "flex").css("color", "red");
  $(".message").text("Please provide your name!");
} else if ($("#email").val() === "") {
  $(".message").css("display", "flex").css("color", "red");
  $(".message").text("Please enter your email!");
} else if (!$("#checkbox-2").prop("checked")) {
  $(".message").css("display", "flex").css("color", "red");
  $(".message").text("Please check the checkbox!");
} else if ($("#Field-2").val() === "") {
  $(".message").css("display", "flex").css("color", "red");
  $(".message").text("Please select an option from the dropdown!");
} else {
  $(".message").css("display", "flex").css("color", "green");
  $(".message").text("All good!");
}
