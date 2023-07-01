const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav-list");
const darkBg = document.querySelector(".dark-bg");

menu.addEventListener("click", () => {
  navList.style.right = "0%";
  darkBg.classList.remove("inactive");
});

const closeNav = () => {
  navList.style.right = "-100%";
  darkBg.classList.add("inactive");
};

close.addEventListener("click", closeNav);
darkBg.addEventListener("click", closeNav);

// Laptop & Desktop Switch
const desktopContainer = document.querySelector(".desktop-container");
const laptopsContainer = document.querySelector(".laptops-container");
const switchContainer = document.querySelector(".switch");

switchContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("desktop")) {
    desktopContainer.classList.remove("inactive");
    laptopsContainer.classList.add("inactive");
    e.target.style.borderBottom = "solid 2px #313131";
    e.target.previousElementSibling.style.borderBottom = "none";
  } else {
    desktopContainer.classList.add("inactive");
    laptopsContainer.classList.remove("inactive");
    e.target.style.borderBottom = "solid 2px #313131";
    e.target.nextElementSibling.style.borderBottom = "none";
  }
});
