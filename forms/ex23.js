// Check the strength of the password
$("#field").on("keyup", function (event) {
    if(/^[A-Za-z0-9]*$/.test(event.currentTarget.value)){
        $(".message").text("The password is not complex");
    }else{
        $(".message").text("The password is complex");
    }
})