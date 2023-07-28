const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", () => {
  const fontSize = `${input.value}px`;
  text.style.fontSize = fontSize;
});
