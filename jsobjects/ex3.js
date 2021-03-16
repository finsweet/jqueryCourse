// Get all email addresses in the text div and pop them to the browser.
// get text div
let all_text = $("#textblock").text();
// separate found emails by a comma
let separateEmailsBy = ", ";
// if no match, use this
let email = "<none>";
// regex match
let emailsArray = all_text.match(
  /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
);
// if emails found
if (emailsArray) {
  //initialize result string
  email = "";
  // loop through results
  for (var i = 0; i < emailsArray.length; i++) {
    if (i != 0) email += separateEmailsBy;
    email += emailsArray[i]; // build result string
  }
}
// popup the result string
alert(email);
