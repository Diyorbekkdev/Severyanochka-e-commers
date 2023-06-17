var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  // separateDialCode:true,
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.0/build/js/utils.js",
});

// store the instance variable so we can access it in the console e.g. window.iti.getNumber()
window.iti = iti;

const userButton = document.getElementById("user-button");
const mobileButton = document.getElementById("mobile-button");
const modal = document.getElementById("modal");
const userName = document.querySelector(".user_info");

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

if (window.innerWidth <= 768) {
  userButton.id = "user-button-mobile";
}

userButton.addEventListener("click", function () {
  if (userInfo) {
    window.location.href = "user-dashboard.html";
  } else {
    openModal();
  }
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

mobileButton.addEventListener("click", openModal);

function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

if (userInfo) {
  userName.textContent = userInfo.userName;
}

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();

  // Perform input validation
  const firstNameInput = document.querySelector(
    ".slide-page .field input[type='text'][placeholder='First Name']"
  );
  const lastNameInput = document.querySelector(
    ".slide-page .field input[type='text'][placeholder='Last name']"
  );

  if (firstNameInput.value.trim() === "" || lastNameInput.value.trim() === "") {
    // Show validation error message using alert
    alert("Please fill in all required fields.");
    return;
  }
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();

  // Perform input validation
  const userEmail = document.querySelector(".email");
  const userPhone = document.querySelector(".tel");

  if (userEmail.value.trim() === "" || userPhone.value.trim() === "") {
    // Show validation error message using alert
    alert("Please fill in all required fields.");
    return;
  }
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();

  // Perform input validation
  const userEmail = document.querySelector(".date");
  const userPhone = document.querySelector(".tel");

  if (userEmail.value.trim() === "" || userPhone.value.trim() === "") {
    // Show validation error message using alert
    alert("Please fill in all required fields.");
    return;
  }
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Perform input validation
  const userNameImp = document.querySelector(".username_important");
  const userPassword = document.querySelector(".tel");

  if (userNameImp.value.trim() === "" || userPassword.value.trim() === "") {
    // Show validation error message using alert
    alert("Please fill in all required fields.");
    return;
  }

  const userInfo = {
    userName: userNameImp.value.trim(),
    userPassword: userPassword.value.trim(),
  };

  // Save user information to local storage
  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function () {
    alert("Your Form Successfully Signed up");
    location.reload();
  }, 800);
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

const userNameElement = document.getElementById("username");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownIcon = document.querySelector(".dropdown-icon");

function toggleDropdown() {
  dropdownMenu.classList.toggle("show");
}

// Add click event listener to user info container
document.getElementById("user-info").addEventListener("click", toggleDropdown);

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
  if (
    !event.target.matches(".user-info") &&
    !event.target.matches(".dropdown-icon")
  ) {
    dropdownMenu.classList.remove("show");
  }
});
dropdownIcon.classList.remove("hidden");

const profileImageInput = document.getElementById("profile-image-input");
const profileImage = document.getElementById("profile-image");

profileImageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const imageDataURL = reader.result;
      profileImage.src = imageDataURL;
    };
    reader.readAsDataURL(file);
  }
});

function toggleDropdown() {
  if (userInfo) {
    dropdownMenu.classList.toggle("show");
  }
}

if (userInfo) {
  userName.textContent = userInfo.userName;
  dropdownIcon.style.display = "block";
}

if (userInfo) {
  userName.textContent = userInfo.userName;
  dropdownIcon.classList.remove("hidden");
}
