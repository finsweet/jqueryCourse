// Removed all managers from list
$(".position").each((index, element) => {
  if ($(element).text() === "Manager")
    // Hide the closest collection item
    $(element).closest(".collection-item").hide();
});
