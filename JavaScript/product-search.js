const searchInput = document.getElementById("searchInput");
const searchResult = document.querySelector(".search_result");
// const searchCount = document.querySelector(".count");
let search = "";

searchInput.addEventListener("keyup", function () {
  search = this.value.toLowerCase();
  handleSearch();
});

function handleSearch() {
  searchResult.innerHTML = "";

  const filteredProducts = products.filter((element) => {
    const { name, description } = element;
    return (
      name.toLowerCase().includes(search) ||
      description.toLowerCase().includes(search)
    );
});

  filteredProducts.forEach((element) => {
    const { id, name, price, description, image } = element;
    let card = document.createElement("a");
    card.classList.add("card");
    card.href = "#" + id;
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

  if (filteredProducts.length > 0 && search !== "") {
    searchResult.style.display = "flex";
    // searchCount.textContent = filteredProducts.length.toString();
  } else {
    searchResult.style.display = "none";
  }
}

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = "#JSGF V1.0;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = "en-US";
recognition.interimResults = false;

recognition.onresult = function (event) {
  var last = event.results.length - 1;
  var command = event.results[last][0].transcript;
  if (command == "dark") {
    document.body.classList.toggle("dark");
  } else {
    search = command;
    searchInput.value = command;
    handleSearch();
  }
  if (command == "open drop-down") {
    toggleDropdown()
  } else {
    search = command;
    searchInput.value = command;
    handleSearch();
  }
  if (command == "close drop-down") {
    toggleDropdown()
  } else {
    search = command;
    searchInput.value = command;
    handleSearch();
  }
  if (command == "go home page") {
    if(window.location.href = '../pages/home.html'){
      
    }else{
      window.open('../pages/home.html', '_blank');
    }
    
  } else {
    search = command;
    searchInput.value = command;
    handleSearch();
  }
  
};

recognition.onspeechend = function () {
  recognition.stop();
};

searchInput.addEventListener("click", function () {
  console.log("working");
});
// document.querySelector('#btnGiveCommand').addEventListener('click', function() {
//   recognition.start();
// });

const btnGiveCommand = document.querySelector("#btnGiveCommand");
let isListening = false;

btnGiveCommand.addEventListener("click", function () {
  if (isListening) {
    stopListening();
  } else {
    startListening();
  }
});

function startListening() {
  recognition.start();
  isListening = true;
  btnGiveCommand.classList.add("button-active");
}

function stopListening() {
  recognition.stop();
  isListening = false;
  btnGiveCommand.classList.remove("button-active");
}

recognition.onstart = function () {
  console.log("Speech recognition started");
};

recognition.onend = function () {
  console.log("Speech recognition ended");
  stopListening();
};


const logoutButton = document.querySelector(".log-out");

logoutButton.addEventListener("click", logout);


function logout(event) {
  event.preventDefault();

  localStorage.removeItem("userInfo");

  location.reload();
}