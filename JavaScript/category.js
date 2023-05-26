const products = [
    { name: "Багет",
      category: "bread", 
      image: "../assets/images/Category/1.jpg" 
    },
    { name: "Чиабатта ",
      category: "bread", 
      image: "../assets/images/Category/2.jpg" 
    },
    { name: "Французский батон",
      category: "bread", 
      image: "../assets/images/Category/3.jpg" 
    },
    { name: "Ржаной хлеб",
      category: "bread", 
      image: "../assets/images/Category/4.jpg" 
    },
    { name: "Бородинский хлеб",
      category: "bread", 
      image: "../assets/images/Category/5.jpg" 
    },
    { name: "Кримсон ролл",
      category: "bread", 
      image: "../assets/images/Category/6.jpg" 
    },
    { name: "Семечковый хлеб",
      category: "bread", 
      image: "../assets/images/Category/7.jpg" 
    },
    { name: "Кукурузный хлеб",
      category: "bread", 
      image: "../assets/images/Category/8.jpg" 
    },
    { name: "Чёрный хлеб",
      category: "bread", 
      image: "../assets/images/Category/9.jpg" 
    },
    { name: "Булка", 
      category: "bread", 
      image: "../assets/images/Category/10.jpg" 
    },
    { name: "Столовый хлеб", 
      category: "bread", 
      image: "../assets/images/Category/11.jpg" 
    },
    { name: "Пшеничный хлеб", 
      category: "bread", 
      image: "../assets/images/Category/12.jpg" 
    },
    { name: "Сдобный хлеб", 
      category: "bread", 
      image: "../assets/images/Category/bread-1.jpg" 
    },
    { name: "Столовый хлеб", 
      category: "bread", 
      image: "../assets/images/Category/bread-2.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-1.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-2.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-3.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-4.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-5.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-6.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-7.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-8.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-9.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-10.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-11.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-12.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-13.jpg" 
    },
    { name: "Product 1", 
      category: "milk", 
      image: "../assets/images/Category/milk-1.jpg" 
    },
    { name: "Product 7", 
      category: "vegetables", 
      image: "path/to/image3.jpg" 
    },
    { name: "Product 5", 
      category: "fruits", 
      image: "path/to/image5.jpg" 
    },
    { name: "Product 6", 
      category: "vegetables", 
      image: "path/to/image6.jpg" 
    },
  ];

  function filterProducts(category) {
    const filteredProducts = products.filter((product) => product.category === category);
    return filteredProducts;
  }
  
  // Function to handle button click event
  function handleButtonClick(event) {
    const selectedCategory = event.target.dataset.category;
    const filteredProducts = filterProducts(selectedCategory);
  
    // Clear existing product section
    const productSection = document.getElementById("productSection");
    productSection.innerHTML = "";
  
    // Wrap every three products with a div
    for (let i = 0; i < filteredProducts.length; i += 4) {
      const productGroup = filteredProducts.slice(i, i + 4);
      const productGroupElement = document.createElement("div");
      productGroupElement.classList.add("box")
      for (const product of productGroup) {
        const productElement = document.createElement("div");
  
        // Create an image element
        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        productElement.appendChild(imageElement);
  
        // Create a title element
        const titleElement = document.createElement("h3");
        titleElement.textContent = product.name;
        productElement.appendChild(titleElement);

        const gradientDiv = document.createElement("div");
        gradientDiv.classList.add("gradient");
        productElement.appendChild(gradientDiv);

        productGroupElement.appendChild(productElement);
      }
  
      productSection.appendChild(productGroupElement);
    }
  }
  
  // Attach event listener to the category buttons
  const categoryButtons = document.getElementById("categoryButtons");
  categoryButtons.addEventListener("click", handleButtonClick);

const defaultCategory = "bread"; // Replace with your desired default category
const defaultButton = categoryButtons.querySelector(`[data-category="${defaultCategory}"]`);
if (defaultButton) {
  handleButtonClick({ target: defaultButton });
}