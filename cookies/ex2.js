//
let page_title = document.title;
Cookies.set("page", page_title);
alert(Cookies.get("page"));