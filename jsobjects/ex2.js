// Match any character from lowercase a to lower case z
let example_string = "123c456";
let reg_pattern = new RegExp("[a-z]", "g");
let result = reg_pattern.exec(example_string);
alert(result);
alert(example_string.replace(reg_pattern, ""));
