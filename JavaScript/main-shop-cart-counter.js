const cartLengthContent = document.querySelector(".count");
let mobileTotalProductNumber = document.querySelector('.countt')
// getting cart json and parsing to array;
let cartProductsJson = localStorage.getItem(CART);
let cartProducts = JSON.parse(cartProductsJson) || [];

function getCartLength() {
  cartLengthContent.innerHTML = cartProducts.length;
  mobileTotalProductNumber.innerHTML =cartProducts.length
}
getCartLength();


function addToCart(id) {
  let product = products.find((el) => el.id === id);
  let check = cartProducts.find((el) => el.id === id);
  if (check) {
    product.quantity++;
    cartProducts = cartProducts.map((el) => {
      return el.id === id ? product : el;
    });
  } else {
    product.quantity = 1;
    cartProducts.push(product);
  }
  localStorage.setItem(CART, JSON.stringify(cartProducts));
  getCartLength();

  let addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  addToCartButtons.forEach((button) => {
    let id = button.dataset.productId;
    let clickCount = 0;

    button.addEventListener("click", (event) => {
      clickCount++;

      if (clickCount == 1) {
        let parentElement = event.target.closest(".parent-element");
        parentElement.classList.add("quantitiy-button");
      }

      addToCart(id);
    });
  });
}



function decrease(id) {
  let quantityElement = document.getElementById(`quantity-${id}`);
  let quantity = parseInt(quantityElement.innerHTML);
  let product = cartProducts.find((el) => el.id === id);
  if (product && product.quantity > 1) {
    product.quantity--;
    quantityElement.innerHTML = quantity;
    updateCartItem(id, product.quantity);
  }
}

function increase(id) {
  let quantityElement = document.getElementById(`quantity-${id}`);
  let quantity = parseInt(quantityElement.innerHTML);
  let product = cartProducts.find((el) => el.id === id);
  if (product) {
    product.quantity++;
    quantityElement.innerHTML = quantity;
    updateCartItem(id, product.quantity);
  }
}

increase(id)
function updateCartItem(id, quantity) {
  cartProducts = cartProducts.map((el) => {
    if (el.id === id) {
      el.quantity = quantity;
    }
    return el;
  });
  localStorage.setItem(CART, JSON.stringify(cartProducts));
  getCartLength();
}



























// function addToCart(id) {
//   let product = products.find((el) => el.id === id);
//   let check = cartProducts.find((el) => el.id === id);
//   if (check) {
//     product.quantity++;
//     cartProducts = cartProducts.map((el) => {
//       return el.id === id ? product : el;
//     });
//   } else {
//     product.quantity = 1;
//     cartProducts.push(product);
//   }
//   localStorage.setItem(CART, JSON.stringify(cartProducts));
//   getCartLength();

//   let addToCartButtons = document.querySelectorAll(".add-to-cart-button");
//   addToCartButtons.forEach((button) => {
//     let id = button.dataset.productId;
//     let clickCount = 0;

//     button.addEventListener("click", (event) => {
//       clickCount++;

//       if (clickCount == 1) {
//         let parentElement = event.target.closest(".parent-element");
//         parentElement.classList.add("quantitiy-button");
//       }

//       addToCart(id);
//     });
//   });
// }





// function increase(id) {
//   cartProducts = cartProducts.map((el) => {
//     if (el.id === id) {
//       el.quantity++;
//     }
//     return el;
//   });
//   localStorage.setItem(CART, JSON.stringify(cartProducts));
//   getCartProducts();
// }

// function decrease(id) {
//   let product = cartProducts.find((el) => el.id === id);
//   if (product.quantity === 1) {
//     cartProducts = cartProducts.filter((el) => el.id !== id);
//   } else {
//     cartProducts = cartProducts.map((el) => {
//       if (el.id === id) {
//         el.quantity--;
//       }
//       return el;
//     });
//   }
//   localStorage.setItem(CART, JSON.stringify(cartProducts));
//   getCartProducts();
//   getCartLength();
// }
