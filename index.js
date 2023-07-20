const btn = document.querySelector(".submit-btn");
const screen = document.querySelector(".screen");
const container = document.querySelector(".component-container");
const ratingComponent = document.querySelector(".rating-component");

const rates = document.querySelectorAll("#rate");
const gridFlow = document.getElementById("grid-flow");
const ratingNum = document.getElementById("rating");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  ratingComponent.classList.add("visually-hidden");
  gridFlow.classList.remove("visually-hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    rating.innerHTML = rate.innerHTML;
  });
});
