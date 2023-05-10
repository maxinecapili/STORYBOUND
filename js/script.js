document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});

window.addEventListener('load', () =>{
const preload = document.querySelector('.preload');
preload.classList.add("preload-finish");
});
