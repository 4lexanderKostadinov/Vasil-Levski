const hamburger = document.querySelector(".hamburger");
const navbarUl = document.querySelector(".navbar-ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarUl.classList.toggle("active");
});

document.querySelectorAll(".nav-link")