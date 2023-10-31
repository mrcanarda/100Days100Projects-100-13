const advice__number = document.getElementById("advice__number");
const adivice__text = document.getElementById("adivice__text");
const advice__id = document.getElementById("advice__id");
const btn__dice = document.getElementById("btn__dice");

window.onload = showQuote;

btn__dice.addEventListener("click", function () {
  showQuote();
});

// showQuote function to show random quote from API
function showQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      advice__number.textContent = data.id;
      advice__id.textContent = data.advice;
    })
    .catch((error) => {
      alert(`Error ${error}`);
    });
}
