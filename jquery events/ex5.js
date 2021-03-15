// Click the alert button to change its opacity.
$("#alertButton").click(function () {
  // make this button unclickable
  $(this).css({ opacity: "0.5", "pointer-events": "none" });
});
