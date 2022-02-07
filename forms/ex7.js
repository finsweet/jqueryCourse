// Press the submit button.
$("#email-form").submit(function (e) {
  if ($("#name").val() === "") {
    alert("Please provide your name!");
    e.stopPropagation();
    return false
  } else if ($("#field").val() === "") {
    alert("Please select an option from the dropdown!");
    e.stopPropagation();
    return false
  } else {
  }
});