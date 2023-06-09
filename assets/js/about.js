const cardText = document.querySelector(".card-text");
const arrow = document.querySelector(".card-subtitle");

arrow.addEventListener("click", function () {
  cardText.classList.toggle("show");
});
