const setValidation = (input, boolean, button) => {
  const small = document.querySelector("small");
  input.classList.remove("valFalse", "valTrue");
  if (boolean === false) {
    input.classList.add("valFalse");
    small.classList.remove("hidden");
  } else {
    input.classList.add("valTrue");
    small.classList.add("hidden");
  }
  button.innerHTML = "Generate!"
} 

const handleSubmit = (button) => {
  button.innerHTML = "Generating...";
  const input = document.querySelector("input");
  input.value ? generateCode(input.value, button) : setValidation(input, false, button);
}

const generateCode = (text, button) => {
  const qrContainer = document.getElementById("qrContainer");
  setTimeout(() => {
    const show = document.getElementById("qrcode");
    show.innerHTML = "";
    const code = new QRCode(show, {
      text,
      width: 128,
      height: 128,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
    button.innerHTML = "Generate!"
    qrContainer.classList.remove("hidden");
  }, 500);
}

const addListeners = () => {
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  input.addEventListener("focus", (e) => {
    setValidation(e.target, true, button); 
  });
  button.addEventListener("click", () => handleSubmit(button));
}

addListeners()