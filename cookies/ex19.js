//
// get URL of current page
current_page = window.location.href;
//check if history cookie exists
if (Cookies.get("history")) {
  // retrieve our array
  pages = Cookies.get("history");
  // convert text to array
  pages = JSON.parse(pages);
  // add current page to our history array
  pages.push(current_page);
  // update the history array
  Cookies.set("history", JSON.stringify(pages));
} else {
  // initilaze the history cookie and set an array
  Cookies.set("history", JSON.stringify([current_page]));
}
alert(Cookies.get("history"));
