
const searchInput = document.getElementById('searchInput');
const searchResult = document.querySelector('.search_result');
const searchCount = document.querySelector('.count');


searchInput.addEventListener('keyup', handleSearch);

function handleSearch() {
  const query = searchInput.value.toLowerCase();

  searchResult.innerHTML = '';

  const filteredProducts = products.filter((element) => {
    const { name, description } = element;
    return name.toLowerCase().includes(query) || description.toLowerCase().includes(query);
  });

  filteredProducts.forEach((element) => {
    const { id, name, price, description, image, category } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `
      <div class="img" style="background: url('${image}') center center no-repeat;
        background-size: cover;"></div>
      <div class="content">
        <div class="price_content">
          <h1 class="category">${name}</h1>
          <p class="price">
            ${price} ₽
          </p>
          <p class="reating_search">${getRating(element.rating)}</p>
        </div>
        <p class="description_search">${description}</p>
      </div>
    `;
    searchResult.appendChild(card);

  });

  if (filteredProducts.length > 0  && query !== '') {
    searchResult.style.display = 'flex'; 
    searchCount.textContent = filteredProducts.length.toString();
  } else {
    searchResult.style.display = 'none';
  }
}







