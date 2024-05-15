
// SHOUT OUT TO @Brad Travery,https://www.traversymedia.com/ and @Coder Coder https://coder-coder.com/ for all your help learning coding languages.
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const hidenav = document.getElementById("hidenav");

// Current Year for Copyright Footer
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

const copyright = document.getElementById("currentYear").innerText = currentYear; 
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


// active class on buttons

var services = document.getElementById("services");
var btns = services.getElementsByClassName("btn");


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";


  });
}


document.addEventListener("DOMContentLoaded", function(){

  var btns1 = document.querySelectorAll("button[data-target]");

  btns1.forEach(function(button){
    button.addEventListener("click", function(event){
      var targetId = button.getAttribute("data-target");
      showContent(targetId);
      event.stopPropagation();
    });
  });

  document.body.addEventListener("click", function(event) {

    var isOutsideContent = true;
    var target = event.target;

    while (target !== document.body) {
      if (target.classList.contains('card_content') || target.tagName === 'BUTTON') {
        isOutsideContent = false;
        break;
      }
      target = target.parentNode;
    }

    if (isOutsideContent) {
      var contents = document.querySelectorAll('.card_content');
      contents.forEach(function(content) {
        content.style.display = 'none';
      
      });
    }

  });

  function showContent(condentId) {
    var contents = document.querySelectorAll(".card_content");
    contents.forEach(function(content) {
      content.style.display = 'none';
    });

    var content = document.getElementById(condentId);
    if (content) {
      content.style.display = 'block';
    }
  }

  
});