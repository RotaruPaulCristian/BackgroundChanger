const change = document.getElementById("change");
const colorText = document.getElementById("color");
const body = document.body;

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}

function changeBG() {
  const color1 = getRandomRGB();
  const color2 = getRandomRGB();
  const color3 = getRandomRGB();

  const colorString = `rgb(${color1}, ${color2}, ${color3})`;

  body.style.background = colorString;
  colorText.innerText = colorString;
}

change.addEventListener("click", changeBG);
