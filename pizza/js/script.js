$(document).ready(function () {
    $('.menu-btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
    });


    $('.product__size').on('click', function (e) {
        $('.product__size').removeClass('product__size-active');
        $(this).addClass('product__size-active');
    });

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();

    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    $('.product__btn').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__size').text($('.product__img img').eq(i).text());
            $('#order .modal__descr').text($('.product__title').eq(i).text());
            $('#order .modal__price').text($('.product__price').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });



    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    });
    $('.menu-btn').on('click', function () {
        $('.menu').toggleClass('menu-active');
    });
    $("a[href^='#']").click(function () {
        var _href = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
        return false;
    });

    $('ul.catalog-nav__wrapper').on('click', 'li:not(.is-active)', function () {
        $(this)
            .addClass('is-active').siblings().removeClass('is-active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
    });
});


$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();

        $('form').trigger('reset');
    });
    return false;
});


