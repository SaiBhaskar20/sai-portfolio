const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
  document.querySelectorAll("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
