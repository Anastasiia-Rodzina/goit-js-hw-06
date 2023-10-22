const list = document.querySelector("ul#categories");
const listItems = list.children;
console.log("Number of categories:", listItems.length);

const categories = document.querySelectorAll("h2");
categories.forEach((category) => {
  console.log("Category:", category.textContent);

  const sibling = category.nextElementSibling;
  const items = sibling.querySelectorAll("li").length;
  console.log("Elements:", items);
});
