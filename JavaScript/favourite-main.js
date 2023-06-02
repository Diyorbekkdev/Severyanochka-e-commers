const favouriteNumber = document.querySelector("#count-favourite");

let favoriteProductsJson = localStorage.getItem(FAVORITE);
let favoriteProducts = JSON.parse(favoriteProductsJson) || [];

function getFavoriteNumber() {
  favouriteNumber.textContent = favoriteProducts.length;
}

getFavoriteNumber();

console.log(favoriteProducts);