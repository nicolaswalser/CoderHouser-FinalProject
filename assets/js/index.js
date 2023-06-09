// Title effect code.

const text = "Hello, I'm Nicolas Walser. Welcome to my portfolio!";
let index = 0;
const typingEffect = document.getElementById("typing-effect");

function type() {
  if (index < text.length) {
    typingEffect.innerHTML += text.charAt(index);
    index++;

    if (index === 27) {
      setTimeout(type, 2000);
      return;
    }

    setTimeout(type, 100);
  } else {
    setTimeout(reset, 4000);
  }
}

function reset() {
  typingEffect.innerHTML = "";
  index = 0;
  type();
}

type();
