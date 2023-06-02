const cartRow = document.getElementById("cartItem");
let amount = document.querySelector(".amout");
let empty = document.querySelector(".empty_basket");
let priceInfo = document.querySelector(".card_info_right");
let totalPriceElement = document.querySelector("#total-amout");
let bookingButton = document.getElementById("booking");
let wholeProduct = document.querySelector(".whole-product");
let totalAmount1 = document.getElementById("total-amout-1");
let totalAmount2 = document.getElementById("total-amout-2");
let checkBoxCart = document.querySelector(".cart__order");

function getCartCard({ id, image, quantity, description, price }) {
  return `<div class="product">
  <label class="containerr">
      <input type="checkbox">
      <svg viewBox="0 0 64 64" height="2em" width="2em">
        <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
      </svg>
      <!-- <p>Выделить всё</p> -->
  </label>
  <div class="product_img">
      <!-- content -->
      <img src="${image}" alt="">
  </div>
  <div class="product_info">
      <div class="title">
          <h4>${description}</h4>
          <p class="price">${price}₽ <span>за шт.</span></p>
      </div>
  </div>
  <div class="adding_card_left">
  <div class="quantity-field" >
  <button 
    class="value-button decrease-button" 
    onclick="decreas(${id})" 
    title="Delete">-</button>
    <div class="number">${quantity}</div>
  <button 
    class="value-button increase-button" 
    onclick="increas(${id})"
    title="Add"
  >+
  </button>
      <div class="main_price">
          <p class="display_price">${price}
              ₽</p>
      </div>
  </div>
</div>`;
}

bookingButton.addEventListener("click", function () {
  const totalPrice = getTotalPrice();

  if (totalPrice < 1000) {
    alert("Total price should be 1000 or more to proceed with booking.");
  } else {
    window.open('../pages/delivering.html');
  }
});

function checkboxCart() {
  checkBoxCart.classList.toggle("animation_bottom");
}

//totalprice
function getTotalPrice() {
  let totalPrice = 0;
  cartProducts.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  return totalPrice;
}
getTotalPrice();

function getCartLength() {
  cartLengthContent.innerHTML = cartProducts.length;
  amount.innerHTML = cartProducts.length;
  wholeProduct.innerHTML = cartProducts.length;
  if (amount.innerHTML == 0) {
    empty.classList.add("view");
  }
  if (amount.innerHTML == 0) {
    priceInfo.classList.add("remove");
  }

  const totalPrice = getTotalPrice();
  totalAmount1.innerHTML = totalPrice;
  totalAmount2.innerHTML = totalPrice;
  totalPriceElement.innerHTML = totalPrice;
}

getCartLength();

function getCartProducts() {
  cartRow.innerHTML = "";
  cartProducts.forEach((el) => {
    count++;
    cartRow.innerHTML += getCartCard(el);
  });
}
getCartProducts();

function increas(id) {
  cartProducts = cartProducts.map((el) => {
    if (el.id === id) {
      el.quantity++;
    }
    return el;
  });
  localStorage.setItem(CART, JSON.stringify(cartProducts));
  getCartProducts();

  const totalPrice = getTotalPrice();
  totalAmount1.innerHTML = totalPrice;
  totalAmount2.innerHTML = totalPrice;
  totalPriceElement.innerHTML = totalPrice;
}

function decreas(id) {
  let product = cartProducts.find((el) => el.id === id);
  if (product.quantity === 1) {
    cartProducts = cartProducts.filter((el) => el.id !== id);
  } else {
    cartProducts = cartProducts.map((el) => {
      if (el.id === id) {
        el.quantity--;
      }
      return el;
    });
  }
  localStorage.setItem(CART, JSON.stringify(cartProducts));
  getCartProducts();
  getCartLength();

  const totalPrice = getTotalPrice();
  totalAmount1.innerHTML = totalPrice;
  totalAmount2.innerHTML = totalPrice;
  totalPriceElement.innerHTML = totalPrice;
}
