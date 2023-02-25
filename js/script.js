const burgerBtn = document.querySelector('#burg');
const burgerMenu = document.querySelector('.header__burger-menu');

burgerBtn.addEventListener('click', function(){
    console.log(burgerBtn);
    burgerMenu.classList.toggle('header__burger-menu--active');
});