const hamb = document.querySelector('.header .navbar .nav-list .hamb');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const header = document.querySelector('.header .container');

hamb.addEventListener('click',() => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});