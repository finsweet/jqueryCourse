// Write all navigator object properties at the end of the web page.
for (aProperty in navigator) {
  $('#resultdiv').append("Current Count : " + counter);
  $('#resultdiv').append("<br/>");
}