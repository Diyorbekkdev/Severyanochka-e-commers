var userButton = document.getElementById('user-button');
var mobileButton = document.getElementById('mobile-button');
var modal = document.getElementById('modal');
var closeBtn = modal.querySelector('.close');

// Check the viewport width and update the button ID accordingly
if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
  userButton.id = 'user-button-mobile'; // Set a new ID for mobile devices
}

// Open the modal when the user button or mobile button is clicked
userButton.addEventListener('click', openModal);
mobileButton.addEventListener('click', openModal);

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  closeModal();
});

// Close the modal when the user clicks outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}



function showSuccessAlert() {
    // Create a custom success alert element
    var successAlert = document.createElement("div");
    successAlert.className = "success-alert";
    successAlert.textContent = "✅ Success! The phone number is correct";

    // Style the custom success alert
    successAlert.style.color = "white";
    successAlert.style.padding = "10px";
    successAlert.style.position = "fixed";
    successAlert.style.top = "90px";
    successAlert.style.left = "50%";
    successAlert.style.zIndex = "10000";
    successAlert.style.transform = "translate(-50%, -50%)";

    // Append the custom success alert to the document body
    document.body.appendChild(successAlert);

    // Remove the custom success alert after a certain duration (e.g., 3 seconds)
    setTimeout(function() {
      successAlert.remove();
    }, 3000);
  }