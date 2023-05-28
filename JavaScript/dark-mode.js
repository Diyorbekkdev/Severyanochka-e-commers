
document.addEventListener('keydown', function(event) {
    // Check if the pressed key matches your desired key
    if (event.key === 'd' || event.key === 'D') {
      // Toggle dark mode
      darkMode();
    }
  });

function darkMode(){
    var darkMode = document.body;
    darkMode.classList.toggle("dark")
}