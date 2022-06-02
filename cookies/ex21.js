// Click radio button to enable dark mode. Refresh to see that preference is remembered.
// check if dark mode cookie value is on
if (Cookies.get("dark-mode") === "on") {
  $("#minidivpage").css({ "background-color": "black", color: "white" });
}
// check if the dark mode cookie has an off value
if (Cookies.get("dark-mode") === "off") {
  $("#minidivpage").css({ "background-color": "white", color: "black" });
}
// listener for radio button
$("#radio-3").click(() => {
  if ($("#radio-3").is(":checked")) {
    $("#minidivpage").css({ "background-color": "black", color: "white" });
    Cookies.set("dark-mode", "on");
  }
});

$("#radio-4").click(() => {
  if ($("#radio-4").is(":checked") || Cookies.get("dark-mode") === "off") {
    $("#minidivpage").css({ "background-color": "white", color: "black" });
    Cookies.set("dark-mode", "off");
  }
});
