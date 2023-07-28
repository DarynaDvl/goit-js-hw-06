function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const dataCreateButton = document.querySelector("[data-create]");
const dataDestroyButton = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");
let boxSize = 30;

dataCreateButton.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    boxSize += 10;
  }
}

dataDestroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
  boxSize = 30;
}
