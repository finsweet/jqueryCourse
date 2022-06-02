// Add first item of list to the bottom of the page
let first_item = $("#minidivpage").children('.w-dyn-list').children('.w-dyn-items').children('.w-dyn-item:eq(0)').clone();
$("#minidivpage").append(first_item);
