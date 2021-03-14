// Get the user cookie, modify its age and alert
let user_cookie = Cookies.get("user");
// convert text to an object
user_cookie = JSON.parse(user_cookie);
user_cookie["age"] = 28;
Cookies.set("user", JSON.stringify(user_cookie));
alert(Cookies.get("user"));
