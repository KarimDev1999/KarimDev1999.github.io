let header = document.querySelector('.header');
header.classList.remove('header-active');

window.onscroll = function () {
    if (window.pageYOffset > 250) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
}

let slideIndex = 0,
    slides = document.querySelectorAll('.product__slider-item'),
    prev = document.querySelector('.product__arrow-left'),
    next = document.querySelector('.product__arrow-right');

showSlides(slideIndex);
function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', function () {
    plusSlides(-1);
});

next.addEventListener('click', function () {
    plusSlides(1);
});




(function () {
    const burger = document.querySelector('.header__menu');
    const menu = document.querySelector('.header__hamburger');
    const list = document.querySelector('.header__sublist');
    burger.addEventListener('click', () => {
        menu.classList.toggle('header__hamburger-active');
        list.classList.toggle('header__sublist-active');
    });
}());

