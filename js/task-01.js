const list = document.querySelector("ul#categories");
const listItems = [...list.children];
console.log("Number of categories:", listItems.length);

listItems.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
