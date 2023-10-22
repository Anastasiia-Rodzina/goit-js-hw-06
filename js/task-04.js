const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const numberValue = document.querySelector("#value");
let counterValue = 0;
decBtn.addEventListener("click", decrementPressCounter);
incBtn.addEventListener("click", incrementPressCounter);

function decrementPressCounter() {
  counterValue -= 1;
  numberValue.textContent = counterValue;
  console.log(numberValue.textContent);
}
function incrementPressCounter() {
  counterValue += 1;
  numberValue.textContent = counterValue;
  console.log(numberValue.textContent);
}
