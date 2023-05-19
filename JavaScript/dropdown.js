
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-content");
    if (dropdown.style.top === "-150%") {
      dropdown.style.top = "100%"; // Show the dropdown below the button
    } else {
      dropdown.style.top = "-450%"; // Hide the dropdown
    }
  }

  function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-content");
    dropdown.classList.toggle("visible");
  }

  var gridItems = document.querySelectorAll('.grid-itemm');

gridItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Remove active class from all grid items
    gridItems.forEach(function(gridItem) {
      gridItem.classList.remove('active');
    });
    
    // Add active class to the clicked grid item
    this.classList.add('active');
  });
});


  