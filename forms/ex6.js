//
$(":text").each(function (index, element) {
  if ($(element).val() === "") {
    alert("This field is empty!");
  }
});
