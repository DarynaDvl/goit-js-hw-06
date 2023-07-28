const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const dataLength = Number(input.getAttribute("data-length"));
  const inputLength = input.value.length;

  if (inputLength === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
