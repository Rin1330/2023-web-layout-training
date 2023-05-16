document.addEventListener('DOMContentLoaded', () => {
  // DOM Ready!

  const btn = document.querySelector('#back-to-top');
  // Event Listener
  btn.addEventListener('click', () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 300);
  })
  // 
  const brandSwiperUpper = new Swiper('.brandWrap-swiper-upper', {
    spaceBetween: 20,
    freeMode: true,
    speed: 500,
    loop: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
      },
  })

  const brandSwiperLower = new Swiper('.brandWrap-swiper-lower', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    // centeredSlides: true,
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
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.commentWrap .swiper-pagination'
    }
    
  })

  const filterWrap = new Swiper('.filterWrap', {
    slidesPerView: 'auto',
    spaceBetween: 8
  })
})
