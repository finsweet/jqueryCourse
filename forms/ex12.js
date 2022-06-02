// Fill the form and the code will validate if everything is perfect.
// declare the validate function
function validate() {
  if ($("#name").val() === "") {
    $(".message").css("display", "flex").css("color", "orange");
    $(".message").text("Please provide your name!");
  } else if ($("#email").val() === "") {
    $(".message").css("display", "flex").css("color", "orange");
    $(".message").text("Please enter your email!");
  } else if (!$("#checkbox-2").prop("checked")) {
    $(".message").css("display", "flex").css("color", "orange");
    $(".message").text("Please check the checkbox!");
  } else if ($("#field").val() === "") {
    $(".message").css("display", "flex").css("color", "orange");
    $(".message").text("Please select an option from the dropdown!");
  } else {
    $(".message").css("display", "flex").css("color", "green");
    $(".message").text("All good!");
  }
}

//listener for the change function
$("#email-form").on("change", validate);
