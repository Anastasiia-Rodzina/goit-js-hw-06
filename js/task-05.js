const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const enterName = (event) => {
  output.textContent =
    textInput.value !== "" ? event.currentTarget.value : "Anonymous";
};
textInput.addEventListener("input", enterName);
