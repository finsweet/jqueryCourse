// Join two different string variables.
let firstname = "John";
let secondname = "Smith";
let joined = firstname + " " + secondname;
let joined2 = firstname.concat(secondname);
$("#resultdiv").append(joined);
$("#resultdiv").append("<br/>");
$("#resultdiv").append(joined2);
