const navToggeler = document.querySelector(".navbar-toggler-icon");
const smNav = document.querySelector(".sm-nav-menu");
const navClose = document.querySelector('.close')

const showNav = () => {
    smNav.style.display = "block"
    smNav.style.width = "100vw"
    smNav.style.height = "100vh"
    // smNav.style.transition = "ease-in 0.5s"
}
navToggeler.addEventListener("click", showNav);


const closeNavMenu = () => {
    // smNav.style.width = '0px'
    smNav.style.display = 'none'
}
navClose.addEventListener("click", closeNavMenu)



// slider for mobile view

$(document).ready(function(){
    $('.slider-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        arrows : true
    });
  });

// login form 
var loginForm = document.querySelector(".log-in-form");
var loginButton = document.querySelector(".nav-login");
var formClose = document.querySelector(".form-close");

loginButton.addEventListener('click', function(){
    loginForm.style.display = 'flex' , 'important';
});

formClose.addEventListener('click', function(){
    loginForm.style.display = 'none' , 'important'
})