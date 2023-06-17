const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 10;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
      getFavouriteOnes();
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      getFavouriteOnes();
    }
  });
});

function handleUpdate() {
  getFavouriteOnes();
}

rangeInput.forEach((el) => el.addEventListener("change", handleUpdate));
priceInput.forEach((el) => el.addEventListener("mousemove", handleUpdate));

// console.log(maxPrice.value);


const customDiv = document.getElementById("main-wrapper");

function checkMaxWidth(mediaQuery) {
  if (mediaQuery.matches) {
    customDiv.classList.add("range-changing");
  } else {
    customDiv.classList.remove("range-changing");
  }
}

const mediaQuery = window.matchMedia("(max-width: 908px)");
checkMaxWidth(mediaQuery); // Check initial viewport width

mediaQuery.addListener(checkMaxWidth); // Listen for changes in viewport width

const openingRangeBtn = document.querySelector('.open-range');
const openingRange = document.querySelector('.wrapper');

openingRangeBtn.addEventListener('click', function(){
    openingRange.classList.toggle('open');
})
