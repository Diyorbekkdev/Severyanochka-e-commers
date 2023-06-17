const button = document.getElementById("myButton");
let isActive = false;

button.addEventListener("click", function () {
  isActive = !isActive;
  if (isActive) {
    button.classList.add("social");
  } else {
    button.classList.remove("social");
  }
});