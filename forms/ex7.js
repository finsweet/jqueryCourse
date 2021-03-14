// Press the submit button.
$("#email-form").submit(function () {
  if ($("#name").val() === "") {
    alert("Please provide your name!");
  } else if ($("#field").val() === "") {
    alert("Please select an option from the dropdown!");
  } else {
  }
});