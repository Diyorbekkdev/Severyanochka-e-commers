// const tovarCardRow = document.querySelector('.main-row');




// function getSpecialCard(item){
//     let { image, category, description, price, img1, img2, img3, img4, id } = item;

//     return `<div class="card_title">
//     <h1><span class = "category">${category} </span>,  ${description}</h1>
//   </div>
//         <div class="card_info">
//             <span>арт. 371431</span>
//             <span>${getRating(item.rating)}</span>
//             <span>3 отзыва</span>
//             <span>Поделиться</span>
//             <span>В избраное</span>
//         </div>

//   <div class="wrapper">
//     <div class="card_left_info">
//       <div class="indicators">
//         <img
//           src="${img1}"
//           alt=""
//         />
//         <img
//           src="${img2}"
//           alt=""
//         />
//         <img
//           src="${img3}"
//           alt=""
//         />
//         <img
//           src="${img4}"
//           alt=""
//         />
//       </div>
//       <div id="show"> 
//         <img onmouseover="zoomImage(event)" onmouseout="resetImage(event)"
//           src="${image}"
//           alt=""
//         />
//       </div>
//     </div>
//     <div class="card_right_info">
//       <div class="wrapper_right">
//         <div class="price-real">
//           <span class="secondary">${price} ₽</span>
//           <span>Обычная цена</span>
//         </div>
//         <div class="price-total">
//           <span class="first">${price} ₽</span>
//           <span>С картой Северяночки <img src="../assets/images/tovar/main-price.svg" alt=""></span>
//         </div>
//       </div>
//       <button onclick = "addToCart(${id})" class="add-cart"> <img src="../assets/images/Home/shopping-cart.svg" alt=""> В корзину</button>
//       <div class="additional_info">
//         <p class="grey"><span class="brend">Бренд</span> <span class="bold">ПРОСТОКВАШИНО</span></p>
//         <p><span>Страна производителя</span> <span class="bold">Россия</span></p>
//         <p class="grey"><span>Упаковка</span> <span class="bold">180 г</span></p>
//       </div>
//     </div>
//   </div>`
// }


// function getSpecialProduct() {
//     tovarCardRow.innerHTML = "";
//     singleCartsInfo.forEach((item) => {
//       tovarCardRow.innerHTML = getSpecialCard(item);
//     });
// }
// getSpecialProduct()

