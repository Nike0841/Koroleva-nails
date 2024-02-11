let swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  effect: 'Flip',
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    spaceBetween: 10,
    
    autoplay: { 
      delay: 3500, 
    },


  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    }

  
  }, 
  
 
});
