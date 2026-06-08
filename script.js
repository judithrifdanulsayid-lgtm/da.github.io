const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* NAVBAR EFFECT */
window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if(window.scrollY > 30){

    nav.style.background = "rgba(255,255,255,0.98)";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";

  } else {

    nav.style.background = "rgba(255,255,255,0.9)";
    nav.style.boxShadow = "none";

  }

});