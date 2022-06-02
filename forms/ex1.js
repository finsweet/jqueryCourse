// Get name from the input field and print it in an alert box
$("#email-form").submit(function (e) {
    e.preventDefault();
    let name = $("#name").val();
    alert(name);
});
