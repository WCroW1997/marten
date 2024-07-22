let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.nav');
let lock = document.querySelector('body');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    lock.classList.toggle('lock');
})

var swiper = new Swiper(".swiper", {
    grid: {
        rows: 2,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            grid: {
                rows: 1,
            },
            slidesPerView: 1,
        },

        640: {
            slidesPerView: 2,

        }
        ,
        800: {
            grid: {
                rows: 2,
            },
            slidesPerView: 3,
        }

    }
});