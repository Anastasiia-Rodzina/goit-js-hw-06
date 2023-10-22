const inputRange = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

function fontSizeChange(event) {
  spanText.style.fontSize = event.currentTarget.value + "px";
}

inputRange.addEventListener("input", fontSizeChange);
