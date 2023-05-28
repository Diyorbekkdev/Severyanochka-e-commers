var cart = [];

function addtocart(a){
  cart.push({...categories[a]})
  displayCart()
}

 function displayCart (){
  let j = 0;
  if(cart.length == 0){
    document.getElementById('cartItem').innerHTML = "Your cart is empty"
  }else{
    document.getElementById('cartItem').innerHTML = cart.map((item) => 
    {
      let {image, description, price, discount } = item;
      return (
        `<div class="product">
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
            <div class="count_button">
                <button class="subtraction"><img width="15px" src="../assets/images/shop-cart/minus.svg" alt=""></button>
                <span>0</span>
                <button class= "addition"><img width="15px" src="../assets/images/shop-cart/plus.svg" alt=""></button>
            </div>
            <div class="main_price">
                <p class="display_price">${price}
                    ₽</p>
            </div>
        </div>
    </div>`
      )
    }).join('');
  }
}