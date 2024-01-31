
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const hidenav = document.getElementById("hidenav");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
  menuBtn.classList.add("nonvisible");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  menuBtn.classList.remove("nonvisible");
});

hidenav.addEventListener("click", () => {
  hidenav.classList.remove("active");
  menuBtn.classList.remove("nonvisible");
});


const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach((navlink) => {
  const navLinkPathname = new URL(navlink.href).pathname;
  
  if(navLinkPathname === activePage) {
    navlink.classList.add ("active");
  }
  
});


window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


// SHOUT OUT TO @Brad Travery, Coder Coder for all your help learning coding languages.