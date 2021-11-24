// Fill the form to see when the focus event is triggered.
$("#email").on("focus", function () {
    $(".message").css("display", "flex").css("color", "orange")
    $(".message").text("You are modifying the email field!")
})