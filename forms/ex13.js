// This will prevent the submit button from doing anything.
$("#email-form").submit(function (event) {
  event.preventDefault();
  return false
});
