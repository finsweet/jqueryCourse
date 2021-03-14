//
Cookies.set(
  "user",
  JSON.stringify({
    name: "john",
    age: "28",
    gender: "male",
    rating: "4.5 stars",
  })
);
alert(Cookies.get("user"));
