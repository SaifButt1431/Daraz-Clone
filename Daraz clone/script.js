var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  lerp: 0.03,
});

