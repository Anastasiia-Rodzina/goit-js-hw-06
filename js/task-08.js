const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget.elements;
  const email = form.email;
  const password = form.password;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }
  const formObj = {
    email: email.value,
    password: password.value,
  };
  console.log(formObj);
  event.currentTarget.reset();
}
