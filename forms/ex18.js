// Fill the form, submit & this code will validate everything is ok.
// function to validate inputs
function validate_inputs() {
  if ($("#name").val() === "") {
    $(".message").css("display", "flex").css("color", "red");
    $(".message").text("Please provide your name!");
    return false;
  } else if ($("#email").val() === "") {
    $(".message").css("display", "flex").css("color", "red");
    $(".message").text("Please enter your email!");
    return false;
  } else if (!$("#checkbox").prop("checked")) {
    $(".message").css("display", "flex").css("color", "red");
    $(".message").text("Please check the checkbox!");
    return false;
  } else if ($("#field").val() === "") {
    $(".message").css("display", "flex").css("color", "red");
    $(".message").text("Please select an option from the dropdown!");
    return false;
  } else {
    $(".message").css("display", "flex").css("color", "green");
    $(".message").text("All good!");
    return true;
  }
}

// function to store data in object
function get_data() {
  let name = $("#name").val();
  let email = $("#email").val();
  let choice = $("#field").val();
  return { name: name, email: email, choice: choice };
}

$("#email-form").submit(function (event) {
  if (validate_inputs() === false) {
    event.preventDefault();
    return false;
  } else {
    let data = get_data();
    $(".w-form-done").html("<div>Welcome !" + JSON.stringify(data) + "</div>");
  }
});
