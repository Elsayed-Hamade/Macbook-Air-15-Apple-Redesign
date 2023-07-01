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
