const product = [
  { id: 1, 
    name: "Fruit", 
    image: "https://picsum.photos/200/300/?category0" },
  { id: 2, 
    name: 
    "Bakery", 
    image: "https://picsum.photos/200/300/?category2" },
  {
    id: 3,
    name: "Vegetable",
    image: "https://picsum.photos/200/300/?category3",
  },
  { id: 4, 
    name: "Dairy", 
    image: "https://picsum.photos/200/300/?category5" },
  { id: 5, 
    name: "Meat", 
    image: "https://picsum.photos/200/300/?category6" },
  {
    id: 6,
    name: "Dessert",
    image: "https://picsum.photos/200/300/?category7",
  },
  {
    id: 7,
    name: "Fast food",
    image: "https://picsum.photos/200/300/?category12",
  },
  {
    id: 8,
    name: "Breakfast",
    image: "https://picsum.photos/200/300/?category23",
  },
  { id: 9, name: "Lunch", image: "https://picsum.photos/200/300/?category27" },
  {
    id: 10,
    name: "Dinner",
    image: "https://picsum.photos/200/300/?category31",
  },
  ];

  const CATEGORY = "category";
  let categoriesRow = document.querySelector("#productSection");
  function getCategoryCard({ name, image }) {
    return `<a href="#" onclick= "getCategory('${name}')" class="box">
                <div>
                    <img src="${image}" alt="${name}">
                    <h3>${name}}</h3>
                    <div class="gradient"></div>
                </div>
          </a>`
  }

  product.forEach((category) => {
    categoriesRow.innerHTML += getCategoryCard(category);
  });
  
  function getCategory(name) {
    localStorage.setItem(CATEGORY, name);
  }

  






// function filterProducts(category) {
//   const filteredProducts = product.filter((product) => product.category === category);
//   return filteredProducts;
// }

// // Function to handle button click event
// function handleButtonClick(event) {
//   const selectedCategory = event.target.dataset.category;
//   const filteredProducts = filterProducts(selectedCategory);

//   // Clear existing product section
//   const productSection = document.getElementById("productSection");
//   productSection.innerHTML = "";

//   // Wrap every three products with a div
//   for (let i = 0; i < filteredProducts.length; i += 4) {
//     const productGroup = filteredProducts.slice(i, i + 4);
//     const productGroupElement = document.createElement("a");
//     productGroupElement.setAttribute("href", "../pages/shop-cart.html");
//     productGroupElement.classList.add("box")
//     productGroupElement.addEventListener("click", () => {
//       getCategory(category);
//     });
//     for (const product of productGroup) {
//       const productElement = document.createElement("div");

//       // Create an image element
//       const imageElement = document.createElement("img");
//       imageElement.src = product.image;
//       productElement.appendChild(imageElement);

//       // Create a title element
//       const titleElement = document.createElement("h3");
//       titleElement.textContent = product.name;
//       productElement.appendChild(titleElement);

//       const gradientDiv = document.createElement("div");
//       gradientDiv.classList.add("gradient");
//       productElement.appendChild(gradientDiv);

//       productGroupElement.appendChild(productElement);
//     }

//     productSection.appendChild(productGroupElement);
//   }
//   // localStorage.setItem(CATEGORY, category);
// }

// // Attach event listener to the category buttons
// const categoryButtons = document.getElementById("categoryButtons");
// categoryButtons.addEventListener("click", handleButtonClick);

// const defaultCategory = "bread"; // Replace with your desired default category
// const defaultButton = categoryButtons.querySelector(`[data-category="${defaultCategory}"]`);
// if (defaultButton) {
// handleButtonClick({ target: defaultButton });
// }




