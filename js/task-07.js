const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

const initialFontSize = `${input.value}px`;
text.style.fontSize = initialFontSize;

input.addEventListener("input", () => {
  const fontSize = `${input.value}px`;
  text.style.fontSize = fontSize;
});
