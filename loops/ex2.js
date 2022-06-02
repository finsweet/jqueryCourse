// Write 0 - 9 on the web page.
let counter = 0;
while (counter < 10) {
  $('#resultdiv').append("Current Count : " + counter + "<br />");
  counter++;
}