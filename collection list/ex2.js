// Remove all managers from list
$(".position").each((index, element) => {
  if ($(element).text() === "Manager")
    // remove the closest collection item
    $(element).closest(".collection-item").remove();
});
