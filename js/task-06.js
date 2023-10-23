const input = document.getElementById("validation-input");
input.addEventListener("blur", blurBorder);

function blurBorder(event) {
  const inputDataLength = Number(input.dataset.length);
  const inputValueLength = input.value.trim().length;

  if (inputValueLength === inputDataLength) {
    useMethod("valid", "invalid");
  } else {
    useMethod("invalid", "valid");
  }
}
function useMethod(a, b) {
  input.classList.add(a);
  input.classList.remove(b);
}
