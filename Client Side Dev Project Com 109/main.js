//Step -1 Select the Element
const openBtn = document.getElementById("open-btn");
const toggleIcon = document.getElementById("toggle-icon");
const menu = document.getElementById("menu");

//Step- 2  Add click event
// Toggle the display of the menu content (e.g., using element.style.display = 'block' or 'none', or by adding/removing a CSS class).
// Change the class of the icon element to switch between the "open" and "close" icon representations.

openBtn.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    toggleIcon.classList.remove("fa-xmark");
    toggleIcon.classList.add("fa-bars");
  } else {
    menu.style.display = "block";
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-xmark");
  }
});
