document.addEventListener("keydown", function (event) {
  // Check if the pressed key matches your desired key
  if (event.ctrlKey && event.shiftKey && event.key === "Q") {
    // Toggle dark mode
    darkMode();
  }
});

function darkMode() {
  var darkMode = document.body;
  darkMode.classList.toggle("dark");
}

const wrapper = document.querySelector(".check_box"),
  header = wrapper.querySelector("label");
function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  wrapper.style.left = `${leftVal + movementX}px`;
  wrapper.style.top = `${topVal + movementY}px`;
}
header.addEventListener("mousedown", () => {
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", () => {
  header.classList.remove("active");
  header.removeEventListener("mousemove", onDrag);
});
