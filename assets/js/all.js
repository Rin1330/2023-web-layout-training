document.addEventListener('DOMContentLoaded', () => {
  // DOM Ready!
  const brandSwiperUpper = new Swiper('.brandWrap-swiper-upper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
    freeMode: true,
  })

  const brandSwiperLower = new Swiper('.brandWrap-swiper-lower', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
    freeMode: true,
  })
})
