// Text area has been restricted to only alphabetical letters and numbers. No special characters!
let allowedChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "n",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
// listener for the text area tag
$("#field").keypress(function (event) {
  // get current curacter
  let char = String.fromCharCode(event.which);
  $("#position").css("display", "flex");
  // find if character is in our allowedchars array
  if (allowedChars.includes(char.toLowerCase())) {
    $("#position").text("Character okay").css("color", "green");
  } else {
    // prevent keypress
    event.preventDefault();
    // send warining message
    $("#position").text("Restricted Character!").css("color", "red");
  }
});
