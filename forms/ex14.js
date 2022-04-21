// Prevent submit till you check agree.
$("#email-form").submit(function (event) {
  if (!$("#checkbox").prop("checked")) {
    $(".message").css("display", "flex").css("color", "red");
    $(".message").text("Please click agree!");
    event.preventDefault();
    return false;
  }
});
