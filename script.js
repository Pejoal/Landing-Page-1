let header = document.querySelector(".header");
let hamburger = document.querySelector(".header .nav-menu .hamburger");
let anchors = document.querySelectorAll(".header .nav-menu a");
let navLinks = document.querySelector(".header .nav-menu .nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  header.classList.toggle("opa");
  // header.style.opacity = 1;
});

anchors.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("scroll", () => {
  let position = window.scrollY; // in pexels
  if (position >= 150) {
    header.style.opacity = 1;
  } else {
    header.style.opacity = 0.9;
  }
});
