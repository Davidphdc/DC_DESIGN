// SHOUT OUT TO @Brad Travery,https://www.traversymedia.com/ and @Coder Coder https://coder-coder.com/ for all your help learning coding languages.
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const hidenav = document.getElementById("hidenav");

// const service = document.getElementById("services");
// const btn = document.querySelectorAll(".btn");


// Menu Navigation
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

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});



// Letterize animation is from anime.js @Juliangarnier & Letterize.js @Wojeciech Krakowiak

import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
const test = new Letterize({
        targets: ".banner_headings"
      });

      const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(100, {
          grid: [test.list[0].length, test.list.length],
          from: "center"
        }),
        loop: true
      });

      animation
        .add({
          scale: 0.5
        })
        .add({
          letterSpacing: "0.625rem"
        })
        .add({
          scale: 1
        })
        .add({
          letterSpacing: "0.375rem"
        });
