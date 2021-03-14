// Fill the form and your form data will be stored in a cookie.
$("#email-form").submit(function (event) {
  let name = $("#name").val();
  if (name !== "") {
    Cookies.set("username", name);
  } else {
    event.preventDefault();
    return false;
  }
});
