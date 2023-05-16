var header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if(window.pageYOffset > 100){
        header.classList.add('bgColor');
    }else{
        header.classList.remove('bgColor');
    }
})

var scroll1 = window.pageYOffset;
window.onscroll = function(){
    var scroll2 = window.pageYOffset;
    if (scroll1 > scroll2) {
        document.querySelector('header').style.top = "0";
    }else{
        document.querySelector('header').style.top = "-100px";
    }
    scroll1 = scroll2;
}

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 30,
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

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

window.addEventListener('load', () =>{
const preload = document.querySelector('.preload');
preload.classList.add("preload-finish");
});

