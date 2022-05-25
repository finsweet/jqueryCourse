// Fill the form and press submit.
$("#email-form").submit(function (event) {
  let name = $("#name").val();
  $(".w-form-done").html("<div>Welcome !" + name + "</div>");
  event.preventDefault();
});
