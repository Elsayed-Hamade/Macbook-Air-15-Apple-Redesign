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
const productsContainer = document.querySelectorAll(".products-container");
const laptopsContainer = document.querySelector(".laptops-container");
const desktopContainer = document.querySelector(".desktop-container");
const switchContainer = document.querySelector(".switch");
const switchChildren = Array.from(switchContainer.children);

switchContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".switch-btn");
  if (!clicked) return;

  switchChildren.forEach((child) => {
    child.style.borderBottom = "none";
  });

  productsContainer.forEach((product) => {
    product.style.display = "none";
  });

  const addBorder = (target) => {
    target.style.borderBottom = "solid 2px #313131";
  };

  if (e.target.classList.contains("desktop")) {
    desktopContainer.style.display = "flex";
    addBorder(e.target);
  } else {
    laptopsContainer.style.display = "flex";
    addBorder(e.target);
  }
});

// Iphone Slider
const slides = document.querySelectorAll(".iphone-product");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let count = 0;
const maxCount = slides.length;
const gotoSlide = (currCount) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currCount)}%)`;
  });
};

rightArrow.addEventListener("click", () => {
  if (count === maxCount - 1) {
    count = 0;
  } else {
    count++;
  }
  gotoSlide(count);
});

leftArrow.addEventListener("click", () => {
  if (count === 0) {
    count = maxCount - 1;
  } else {
    count--;
  }
  gotoSlide(count);
});

gotoSlide(0);

// PopUp
const newsBtns = document.querySelectorAll(".news-btn");
const newsContainer = document.querySelector(".news-container");
const closeNews = document.querySelector(".close-news");
newsBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    newsContainer.classList.add("active-news");
  });
});

closeNews.addEventListener("click", () => {
  newsContainer.classList.remove("active-news");
});

// Smooth Scroll
const navLists = document.querySelectorAll(".nav-list");

navLists.forEach((navList) => {
  navList.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Nav Fixed
const homeSec = document.querySelector(".home");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-ink")

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-sticky");
      nav.style.zIndex = 100;
      navLinks.forEach(link => cl(link))
    } else {
      nav.classList.remove("nav-sticky");
    }
  });
});

observer.observe(homeSec);

// Media Query
const newsBtn = document.querySelector(".news-btn");
const startQuery = () => {
  const mediaQuery = matchMedia("(min-width : 800px)");
  if (mediaQuery.matches) {
    menu.style.display = "none";
    close.style.display = "none";
    darkBg.before(newsBtn);
  }
};
window.addEventListener("load", () => {
  startQuery();
});
