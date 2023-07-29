const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  listOfIngredients.appendChild(ingredientsItem);
}

const ingredientsList = document.getElementById("ingredients");
ingredientsList.appendChild(listOfIngredients);
