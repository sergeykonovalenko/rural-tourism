$(document).ready(function () {
    'use strict';

    // init modal
    $('.light-box-img').fancybox({
        backFocus: false,
    });

    // offer slider
    $('.offer-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    // offer object
    $('.offer-object').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: '<button class="offer-object__arrow offer-object__arrow--prev" type="button" aria-label="Назад"><span class="offer-object__icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 15.5 26.7" fill="#fff"><path d="M.4 12.5L12.6.4c.5-.5 1.3-.5 1.8 0l.7.7c.5.5.5 1.3 0 1.8L4.5 13.3l10.6 10.5c.5.5.5 1.3 0 1.8l-.7.7c-.5.5-1.3.5-1.8 0L.4 14.2c-.5-.5-.5-1.3 0-1.7z"/></svg></span></button>',
        nextArrow: '<button class="offer-object__arrow offer-object__arrow--next" type="button" aria-label="Вперед"><span class="offer-object__icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 15.5 26.7" fill="#fff"><path d="M15.1 14.2L2.9 26.3c-.5.5-1.3.5-1.8 0l-.7-.7c-.5-.5-.5-1.3 0-1.8L11 13.3.4 2.9c-.5-.5-.5-1.3 0-1.8l.7-.7c.5-.5 1.3-.5 1.8 0l12.3 12.1c.4.4.4 1.2-.1 1.7z"/></svg></span></button>',
    });

    // card slider
    $('.card-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    // slider interesting
    $('.slider-interesting').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: '<button class="slider-interesting__arrow slider-interesting__arrow--prev" type="button" aria-label="Назад"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="102"><path d="M1 51L14 1v100z" fill="none" stroke="#a7b51a" stroke-width="2"/></svg></button>',
        nextArrow: '<button class="slider-interesting__arrow slider-interesting__arrow--next" type="button" aria-label="Вперед"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="102"><path d="M14 51L1 100.99V1z" fill="none" stroke="#a7b51a" stroke-width="2"/></svg></button>',
    });

    // init Masonry
    let $grid = $('.posts-list').masonry({
        itemSelector: '.posts-list__item',
        columnWidth: '.posts-list__item',
        gutter: 10,
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    // show/hide full information
    $('.more-info__button').on('click', function () {
        let moreInfoContent = $(this).closest('.more-info').find('.more-info__content');
        moreInfoContent.fadeToggle();
        $(this).toggleClass('more-button--close');
        $(this).find('span').text( $(this).hasClass('more-button--close') ? 'Скрыть подробную информацию' : 'Показать подробную информацию');
    });

    // show/hide gallery
    let galleryItemsHidden = $('.gallery-section .gallery__item:nth-child(n + 7)');

    $('.gallery-section__button').on('click', function () {
        galleryItemsHidden.fadeToggle();
        $(this).toggleClass('more-button--close');
        $(this).find('span').text( $(this).hasClass('more-button--close') ? 'Скрыть фотографии' : 'Показать все фотографии');
    });

}); // end ready
