const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { elements } = event.currentTarget;
  const email = elements.email.value;
  const password = elements.password.value;

  if (email === "" || password === "") {
    alert(`All fields are required`);
  } else {
    const formValues = {
      email: email,
      password: password,
    };
    console.log(formValues);
    form.reset();
  }
}
