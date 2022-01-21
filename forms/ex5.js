//
$("form :input").each(function (index, element) {
  if ($(element).val() === "") {
    console.log("This field is empty! " + element);
  }
});
