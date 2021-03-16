// Search for a needle in a haystack.
let needle = "todo";
let haystack =
  "All work completed except lines that are marked todo at the end";
if (haystack.includes(needle)) {
  $("#resultdiv").text("substring found");
}
