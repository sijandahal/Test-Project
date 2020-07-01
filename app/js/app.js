const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector ('.nav__items');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__menu')

hamburger.addEventListener('click', function(){
  
  hamburger.classList.toggle('open');
  overlay.classList.toggle('display');
  menu.classList.toggle ('active')
})

var scroll = new SmoothScroll('a[href*="#"]');

