function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const text = document.querySelector(".color");
const btnChange = document.querySelector(".change-color");
const body = document.querySelector("body");

const changeColor = () => {
  text.textContent = body.style.backgroundColor = getRandomHexColor();
};
btnChange.addEventListener("click", changeColor);
