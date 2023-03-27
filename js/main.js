const swiper = new Swiper('.swiper-partners', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    860: {
      slidesPerView: 4,
      spaceBetween: 20
    }}
 
});
const swiper2 = new Swiper('.swiper-students', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click',() =>{
  menu.classList.toggle('menu__list--active')
})