// Click the shopping list to add to shopping cart cookie.
// listener for list items
$("li").click((event) => {
  let product = $(event.target).text();
  // change color to show product is selected
  $(event.target).css("color", "purple");
  // if the cart cookie exists
  if (Cookies.get("shopping_cart")) {
    let current_items = JSON.parse(Cookies.get("shopping_cart"));
    // add new product
    current_items.push(product);
    // store updates array in cookie
    Cookies.set("shopping_cart", JSON.stringify(current_items));
  } else {
    Cookies.set("shopping_cart", JSON.stringify([product]));
  }
  alert(Cookies.get("shopping_cart"));
});
