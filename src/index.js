import "./scss/index.scss";

document.querySelector('.nav__hamburger').addEventListener('click', function(){
  this.classList.toggle('--active');
  this.parentNode.classList.toggle('nav--active')
})