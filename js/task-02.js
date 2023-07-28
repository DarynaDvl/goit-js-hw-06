const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  listOfIngredients.appendChild(ingredientsItem);
}

document.body.appendChild(listOfIngredients);
