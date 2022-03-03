// FLICKITY
jQuery(document).ready(function(){
  jQuery('.slider__item-wrap').flickity({
  // options
  cellAlign: 'left',
  contain: true ,
  wrapAround: true,
  pageDots: false ,
  autoPlay: true ,
  autoPlay: 2000 ,
})
});

//location
let home = document.querySelector('.menu__fullscreen .menu__fullscreen-bottom .list ul li');
let homeHeader = document.querySelector('.header .header__left ul li');

homeHeader.addEventListener('click', function(){
  window.location.reload();
});
home.addEventListener('click', function(){
  window.location.reload();
});

         // homepage
//nav
let nav = document.querySelector('.slider__menu ');
let hideNav = document.querySelector('.menu__fullscreen');
let close__nav = document.querySelector('.close__nav');
let NavMobile = document.querySelector('.menu__mobile .slide__left');

nav.addEventListener('click',function(){
  hideNav.style.transform = 'translateX(0px)';
});
  NavMobile.addEventListener('click',function(){
  hideNav.style.transform = 'translateX(0px)';
});
close__nav.addEventListener('click',function(){
  hideNav.style.transform = 'translateX(-600px)';
});
//footer
let backToTop = document.querySelector('.backtotop');

backToTop.addEventListener('click', function(){
  window.scroll({
    top: 0 ,
    behavior: "smooth", 
  });
});
//menu scroll
let positionLider =document.querySelector(".product").offsetTop;
let menuScroll =document.querySelector('.menu__scroll');

window.addEventListener("scroll",function(){

  let positionScroll =window.pageYOffset;
  if(positionScroll> positionLider){
    menuScroll.style.transform = 'translateY(0px)' ;
  }else{
    menuScroll.style.transform = 'translateY(-50px)' ;

  }
});
