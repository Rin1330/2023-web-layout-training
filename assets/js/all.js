document.addEventListener('DOMContentLoaded', () => {
  // DOM Ready!
  const brandSwiperUpper = new Swiper('.brandWrap-swiper-upper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    freeMode: true,
  })

  const brandSwiperLower = new Swiper('.brandWrap-swiper-lower', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
  })

  const commentWrap = new Swiper('.commentWrap', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }
  })
})
