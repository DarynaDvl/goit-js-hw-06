const listOfCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach((category) => {
  const categoryName = category.querySelector("h2").innerText;
  const categoryElements = category.querySelectorAll("ul li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
