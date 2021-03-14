// Sort list.
let all_names = [];
$("li").each((index, element) => {
  let name = $(element).text();
  all_names.push(name);
});
all_names.sort();
// rebuilt list in alphabetical order
$("li").each((index, element) => {
  $(element).text(all_names[index]);
});