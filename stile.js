document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("opener").addEventListener("click", function () {
    document.querySelector("main_up").classList.toggle("open");
  });
});

// var pagination =
// document.querySelector('.--swiper-pagination');
// pagination.style.Top = '100px'

const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBeetween: 16,
  observer: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    768: {
      enabled: false,
    },
  },
});
