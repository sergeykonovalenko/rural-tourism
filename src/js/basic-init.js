$(document).ready(function () {
    'use strict';

    // offer slider
    $('.offer-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
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

}); // end ready
