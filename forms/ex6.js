//
$(":text").each(function (index, element) {
  if ($(element).val() === "") {
    console.log(element, "This field is empty!");
  }
});
