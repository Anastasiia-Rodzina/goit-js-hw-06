const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const enterName = (event) => {
  output.textContent =
    textInput.value.trim() !== ""
      ? event.currentTarget.value.trim()
      : "Anonymous";
};
textInput.addEventListener("input", enterName);
