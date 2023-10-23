function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.getElementById("boxes");

inputNumber.addEventListener("input", toogleValue);

let inputValue = 0;
function toogleValue(event) {
  inputValue = inputNumber.value;
}

createBtn.addEventListener("click", () => {
  createBoxes(Number(inputNumber.value));
});
function createBoxes(amount) {
  let divArr = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const divElement = document.createElement("div");
    divElement.classList = "box";
    divElement.style.height = `${size}px`;
    divElement.style.width = `${size}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    divArr.push(divElement);
  }
  return divBoxes.append(...divArr);
}
destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  inputNumber.value = "";
  divBoxes.innerHTML = "";
}
