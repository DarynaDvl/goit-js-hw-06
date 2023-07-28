const listOfCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach((category) => {
  const categoryName = category.querySelectorAll("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
