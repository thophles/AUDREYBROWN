var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel:
  {
  invert: false,
  },
});
