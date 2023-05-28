const products = [
    {
        "id": 1,
        "name": "Apple",
        "category": "Fruit",
        "description": "A round fruit with a red, green, or yellow ",
        "price": 89,
        "rating": 5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-1.png"
    },
    {
        "id": 2,
        "name": "Banana",
        "category": "Fruit",
        "description": "A long, curved fruit with a yellow skin and sweet, creamy white flesh.",
        "price": 71,
        "rating": 5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 3,
        "name": "Bread",
        "category": "Bakery",
        "description": "A staple food made from flour, water, and yeast, baked into a loaf.",
        "price": 88,
        "rating": 5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 4,
        "name": "Broccoli",
        "category": "Vegetable",
        "description": "A green vegetable with a tree-like appearance, known for its high nutrient content.",
        "price": 94,
        "rating": 4.5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-4.png"
    },
    {
        "id": 5,
        "name": "Carrot",
        "category": "Vegetable",
        "description": "A root vegetable with a crunchy texture and a sweet, earthy flavor.",
        "price": 82,
        "rating": 5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-1.png"
    },
    {
        "id": 6,
        "name": "Cheese",
        "category": "Dairy",
        "description": "A dairy product made from milk, with a variety of textures and flavors.",
        "price": 91,
        "rating": 3.5,
        "discount": 50,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 7,
        "name": "Chicken",
        "category": "Meat",
        "description": "A type of poultry, often used as a source of protein in meals.",
        "price": 68,
        "rating": 3.5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 8,
        "name": "Chocolate",
        "category": "Dessert",
        "description": "A sweet food made from cacao beans, used in a variety of desserts and confections.",
        "price": 61,
        "rating": 4.5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-4.png"
    },
    {
        "id": 9,
        "name": "Coffee",
        "category": "Dessert",
        "description": "A dark, bitter beverage made from roasted coffee beans, typically used as a pick-me-up.",
        "price": 98,
        "rating": 5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-1.png"
    },
    {
        "id": 10,
        "name": "Egg",
        "category": "Dairy",
        "description": "A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.",
        "price": 79,
        "rating": 4.5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 11,
        "name": "Fish",
        "category": "Meat",
        "description": "A type of seafood, known for its omega-3 fatty acids and high protein content.",
        "price": 89,
        "rating": 3.5,
        "discount": 50,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 12,
        "name": "Grapes",
        "category": "Fruit",
        "description": "A small, sweet fruit that grows in clusters, often used in wine-making.",
        "price": 61,
        "rating": 4,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-4.png"
    },
    {
        "id": 13,
        "name": "Hamburger",
        "category": "Fast food",
        "description": "A sandwich made with a patty of ground beef, served on a bun with various toppings.",
        "price": 87,
        "rating": 5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-1.png"
    },
    {
        "id": 14,
        "name": "Hot dog",
        "category": "Fast food",
        "description": "A type of sausage served in a long roll, often used as a quick and convenient food.",
        "price": 84,
        "rating": 4.5,
        "discount": 50,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 15,
        "name": "Ice cream",
        "category": "Dessert",
        "description": "A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.",
        "price": 68,
        "rating": 4.5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 16,
        "name": "Lemon",
        "category": "Fruit",
        "description": "A yellow citrus fruit with a tart, acidic flavor, often used in cooking and baking.",
        "price": 74,
        "rating": 3.5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-4.png"
    },
    {
        "id": 17,
        "name": "Eggs",
        "category": "Dairy",
        "description": "Eggs are oval-shaped reproductive structures produced by female birds and some reptiles.",
        "price": 70,
        "rating": 4.5,
        "discount": 50,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 18,
        "name": "Honey",
        "category": "Dairy",
        "description": "Honey is a sweet, sticky liquid made by bees from the nectar of flowers.",
        "price": 87,
        "rating": 4,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 19,
        "name": "Ice Cream",
        "category": "Dessert",
        "description": "Ice cream is a frozen dessert made from cream, sugar, and flavorings.",
        "price": 83,
        "rating": 4.5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-4.png"
    },
    {
        "id": 20,
        "name": "Jelly",
        "category": "Fruit",
        "description": "Jelly is a sweet spread made from fruit juice and sugar, often used as a topping for toast or pastries.",
        "price": 76,
        "rating": 5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 21,
        "name": "Ketchup",
        "category": "Dairy",
        "description": "Ketchup is a tangy sauce made from tomatoes, vinegar, sugar, and spices.",
        "price": 77,
        "rating": 5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 22,
        "name": "Mango",
        "category": "Fruit",
        "description": "Mangoes are juicy, sweet tropical fruits with a fleshy interior and a large, oblong seed in the center.",
        "price": 80,
        "rating": 5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-4.png"
    },
    {
        "id": 23,
        "name": "Noodles",
        "category": "Meat",
        "description": "Noodles are a type of pasta made from wheat flour and water, often used in Asian cuisine.",
        "price": 93,
        "rating": 3.5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 24,
        "name": "Oatmeal",
        "category": "Breakfast",
        "description": "Oatmeal is a type of porridge made from oats that is often served for breakfast.",
        "price": 94,
        "rating": 4.5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 25,
        "name": "Bacon",
        "category": "Breakfast",
        "description": "Bacon is a popular breakfast food made from cured pork belly, it is newly delivered.",
        "price": 71,
        "rating": 3.5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-4.png"
    },
    {
        "id": 26,
        "name": "Pancakes",
        "category": "Breakfast",
        "description": "Pancakes are a popular breakfast food made from flour, eggs, and milk.",
        "price": 63,
        "rating": 4,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-1.png"
    },
    {
        "id": 27,
        "name": "Waffles",
        "category": "Breakfast",
        "description": "Waffles are a type of breakfast food made from batter cooked in a waffle iron.",
        "price": 97,
        "rating": 4.5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 28,
        "name": "Fried Rice",
        "category": "Lunch",
        "description": "Fried Rice is a type of rice dish that is stir-fried in a pan with oil and other ingredients.",
        "price": 81,
        "rating": 4,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 29,
        "name": "Spaghetti",
        "category": "Lunch",
        "description": "Spaghetti is a type of pasta made from wheat flour and water, usually served with sauce.",
        "price": 96,
        "rating": 3,
        "discount": 50,
        "image": "../assets/images/Home/home-card-images/img-4.png"
    },
    {
        "id": 30,
        "name": "Pizza",
        "category": "Lunch",
        "description": "Pizza is a popular dish made from dough, sauce, cheese, and toppings.",
        "price": 95,
        "rating": 4,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 31,
        "name": "Grilled Cheese",
        "category": "Lunch",
        "description": "A grilled cheese sandwich is a hot sandwich made from cheese and bread.",
        "price": 100,
        "rating": 5,
        "discount": 50,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 32,
        "name": "Steak",
        "category": "Dinner",
        "description": "Steak is a popular dinner dish made from a cut of beef that is usually grilled or pan-fried.",
        "price": 63,
        "rating": 4.5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-4.png"
    },
    {
        "id": 33,
        "name": "Salmon",
        "category": "Dinner",
        "description": "Salmon is a type of fish that is often grilled or baked and served as a main course.",
        "price": 82,
        "rating": 4.5,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 34,
        "name": "Chicken Alfredo",
        "category": "Dinner",
        "description": "Chicken Alfredo is a pasta dish made with chicken, alsjfkdlkasdfhlkjh.",
        "price": 94,
        "rating": 4,
        "discount": 20,
        "image": "../assets/images/Home/home-card-images/img-2.png"
    },
    {
        "id": 35,
        "name": "Lasagna",
        "category": "Dinner",
        "description": "Lasagna is a type of pasta dish made with layers of pasta, sauce, cheese, and meat or vegetables.",
        "price": 70,
        "rating": 1,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-3.png"
    },
    {
        "id": 36,
        "name": "Chocolate Chip Cookies",
        "category": "Dessert",
        "description": "Chocolate Chip Cookies are a type of cookie made from flour, sugar, butter, and chocolate chips.",
        "price": 98,
        "rating": 3.5,
        "discount": 0,
        "image": "../assets/images/Home/home-card-images/img-1.png"
    }
]

const app = [
  {
    "id": 1,
    "title": "Оформите карту «Северяночка»",
    "description": "И получайте бонусы при покупке в магазинах и на сайте.",
    "image": "../assets/images/Home/home-card-images/app-card-1.png"
  },
  {
    "id": 2,
    "title": "Покупайте акционные товары",
    "description": "И получайте вдвое больше бонусов.",
    "image": "../assets/images/Home/home-card-images/app-card-2.png"
  }
]

const stati = [
  {
    "id": 1,
    "title": "Режим использования масок и перчаток на территории магазинов",
    "description": ` Подробная информация о режимах использования масок и перчаток на
    территории магазинов "ЛЕНТА". Информация обновляется каждый будний
    день.`,
    "image": "../assets/images/Home/home-card-images/stati-1.png",
    "date" : '05.03.2021'

  },
  {
    "id": 2,
    "title": "Весеннее настроение для каждой  и праздничных тёплых пожеланий",
    "description": ` 8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.`,
    "image": "../assets/images/Home/home-card-images/stati-2.png",
    "date" : '02.05.2023'
  },
  {
    "id": 3,
    "title": "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    "description": `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!.`,
    "image": "../assets/images/Home/home-card-images/stati-3.png",
    "date" : '22.02.2020'
  }
]

    


// DISCOUNT SECTIOINS PRODUCTS
const categories = [...new Set(products.map((item) => 
 {return item}))];
 let i = 0;
document.getElementById('root').innerHTML = categories.map((item) =>
{   
    let {image, description, price, discount} = item;
    if(item.discount > 0){
        return(
            ` <div class=" card">
            <img
              src="${image}"
              alt="biscuit"
            />
            <label class="container__heart">
              <input checked="checked" type="checkbox" />
              <div class="checkmark">
                <svg viewBox="0 0 256 256">
                  <rect fill="none" height="256" width="256"></rect>
                  <path
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    stroke-width="20px"
                    stroke="#ccc"
                    fill="none"
                  ></path>
                </svg>
              </div>
            </label>
            <span class="discount_percent">-${discount}%</span>
            <div class="card_body">
              <div class="price">
                <p>${price} ₽</p>
                <span>50,50 ₽</span>
              </div>
              <div class="price_info">
                <p>С картой</p>
                <p>Обычная</p>
              </div>
              <p class="main_info">${description}</p>
              <div class="rating">
                ${getRating(item.rating)}
              </div>
              <button>В корзину
  <div class="star-1">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-2">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-3">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-4">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-5">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-6">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
</button>
            </div>
          </div>`
        )
    }
}).slice(-6).join('')





// NEW PRODUCTS SECTIOIN
function findLastFiveLowestRatedProducts(products) {
   
    products.sort((a, b) => b.rating - a.rating);
  
    const lastFiveProducts = products.slice(-5);

    return lastFiveProducts;
  }
  const lastFiveLowestRatedProducts = findLastFiveLowestRatedProducts(products);

  const newProducts = [...new Set(lastFiveLowestRatedProducts.map((item) => 
    {return item}))];
   
   document.getElementById('roots').innerHTML = lastFiveLowestRatedProducts.map((item) =>
   {   
       let {image, description, price} = item;
           return(
               ` <div class=" card">
               <img
                 src="${image}"
                 alt="biscuit"
               />
               <label class="container__heart">
                 <input checked="checked" type="checkbox" />
                 <div class="checkmark">
                   <svg viewBox="0 0 256 256">
                     <rect fill="none" height="256" width="256"></rect>
                     <path
                       d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                       stroke-width="20px"
                       stroke="#ccc"
                       fill="none"
                     ></path>
                   </svg>
                 </div>
               </label>
               <span class="discount_percent percent">New</span>
               <div class="card_body">
                 <div class="price">
                   <p>${price} ₽</p>
                   <span>50,50 ₽</span>
                 </div>
                 <div class="price_info">
                   <p>С картой</p>
                   <p>Обычная</p>
                 </div>
                 <p class="main_info">${description}</p>
                 <div class="rating">
                   ${getRating(item.rating)}
                 </div>
                 <button>В корзину
  <div class="star-1">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-2">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-3">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-4">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-5">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-6">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
</button>
               </div>
             </div>`
           )
    //    }
   }).join('')

  //  HIGHT RATED PRODUCTS SECTION
   function findLastFiveHighestRatedProducts(products) {
   
    products.sort((a, b) => a.rating - b.rating);
  
    const lastFiveProducts = products.slice(-5);

    return lastFiveProducts;
  }
  const lastFiveHighestRatedProducts = findLastFiveHighestRatedProducts(products);

  const hightRatedProducts = [...new Set(lastFiveHighestRatedProducts.map((item) => 
    {return item}))];
   
   document.getElementById('high-rated').innerHTML = lastFiveHighestRatedProducts.map((item) =>
   {   
       let {image, description, price} = item;
           return(
               ` <div class=" card">
               <img
                 src="${image}"
                 alt="biscuit"
               />
               <label class="container__heart">
                 <input checked="checked" type="checkbox" />
                 <div class="checkmark">
                   <svg viewBox="0 0 256 256">
                     <rect fill="none" height="256" width="256"></rect>
                     <path
                       d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                       stroke-width="20px"
                       stroke="#ccc"
                       fill="none"
                     ></path>
                   </svg>
                 </div>
               </label>
               <div class="card_body">
                 <div class="price">
                   <p>${price} ₽</p>
                   <span>50,50 ₽</span>
                 </div>
                 <div class="price_info">
                   <p>С картой</p>
                   <p>Обычная</p>
                 </div>
                 <p class="main_info">${description}</p>
                 <div class="rating">
                   ${getRating(item.rating)}
                 </div>
                 <button>В корзину
  <div class="star-1">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-2">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-3">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-4">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-5">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-6">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
</button>
               </div>
             </div>`
           )
    //    }
   }).join('')

function getRating(rating) {
    let res = "";
    let star_count = 0;
    let full_star = parseInt(rating);
    let rest_star = rating - full_star;
    star_count = full_star;
    res = Array(full_star).fill("<img  src='../assets/images/Home/full-star.svg'>").join("");
    if (0.25 <= rest_star && rest_star <= 0.5) {
      star_count++;
      res += "<img src='../assets/images/Home/half-star.svg'>";
    }
    if (0.5 < rest_star) {
      star_count++;
      res += "<img src='../assets/images/Home/full-star.svg'>";
    }
    free_star = 5 - star_count;
    res += Array(free_star).fill("<img src='../assets/images/Home/free-star.svg'>").join("");
    return res;
  }


// app section
const appSection = [...new Set(app.map((item) => 
  {return item}))];
 
 document.getElementById('app_container').innerHTML = appSection.map((item) =>
 {   
     let {image, description, title,} = item;
     if(item.id === 1){
       return(
           ` <div class="box">
           <div class="box__info">
             <h4>${title}</h4>
             <p>${description}</p>
           </div>
           <div class="cover_img">
             <img
               class="app_img"
               src="${image}"
               alt="Северяночка"
             />
           </div>
         </div>
        `
       )

     }else if (item.id === 2){
        return (
          ` <div class="box second_box">
          <div class="box__info">
            <h4>${title}</h4>
            <p>${description}</p>
          </div>
          <div class="cover_img">
            <img
              class="app_img"
              src="${image}"
              alt="Северяночка"
            />
          </div>
        </div>`
        )
     }
     
 }).join('')
// app section
const statiContents = [...new Set(stati.map((item) => 
  {return item}))];
 
 document.getElementById('stati-root').innerHTML = statiContents.map((item) =>
 {   
     let {image, description, title, date} = item;
     if(item.id === 1){
       return(
           ` <div class="card">
           <img
             src="${image}"
             alt=""
           />
           <span class="date">${date}</span>
           <h4>
             ${title}
           </h4>
           <p>
             ${description}
           </p>
           <button>В корзину
  <div class="star-1">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-2">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-3">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-4">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-5">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-6">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
</button>
         </div>
        `
       )

     }else if (item.id === 2){
        return (
          ` <div class="card">
          <img
            src="${image}"
            alt=""
          />
          <span class="date">${date}</span>
          <h4>
            ${title}
          </h4>
          <p>
            ${description}
          </p>
          <button>В корзину
  <div class="star-1">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-2">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-3">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-4">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-5">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-6">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
</button>
        </div>`
        )
     }else{
      return (
        ` <div class="card">
        <img
          src="${image}"
          alt=""
        />
        <span class="date">${date}</span>
        <h4>
          ${title}
        </h4>
        <p>
          ${description}
        </p>
        <button>В корзину
  <div class="star-1">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-2">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-3">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-4">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-5">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
  <div class="star-6">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
  </div>
</button>
      </div>`
      )
     } 
 }).join('')

 
