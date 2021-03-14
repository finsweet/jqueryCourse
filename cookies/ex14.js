// Get the shopping cart cookie, remove an item
//set the cookie and initialize with values
Cookies.set('shopping_cart',  JSON.stringify(['beer', 'deodrant', 'soda']))
// get the cookie values and store them in the items variable
let items =  JSON.parse(Cookies.get('shopping_cart'))
// find the index of beer
var index = items.indexOf("beer");
// if index is existent
if (index !== -1) {
  //remove beer from the array
  items.splice(index, 1);
}
// reset the cookie with the modified array
Cookies.set('shopping_cart',  JSON.stringify(items))
// show the values of the cookie
alert( Cookies.get('shopping_cart'))