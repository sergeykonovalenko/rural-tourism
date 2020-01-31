$(document).ready(function () {
    'use strict';

    // init modal
    $('.light-box-img').fancybox({
        backFocus: false,
    });

    $('.btn-modal').fancybox({
        touch : false,
        backFocus : false,
        btnTpl: {
            smallBtn: `
                <button class="modal-common__close fancybox-button fancybox-close-small" type="button" data-fancybox-close title="Закрыть">
                    <svg width="15" height="15" viewBox="0 0 320 320" fill="#000" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 160L315.3 52.3c6.2-6.2 6.2-16.3 0-22.6l-25-25c-6.2-6.2-16.3-6.2-22.6 0L160 112.4 52.3 4.7c-6.2-6.2-16.3-6.2-22.6 0l-25 25c-6.2 6.2-6.2 16.3 0 22.6L112.4 160 4.7 267.7c-6.2 6.2-6.2 16.3 0 22.6l25 25c6.2 6.2 16.3 6.2 22.6 0L160 207.6l107.7 107.7c6.2 6.2 16.3 6.2 22.6 0l25-25c6.2-6.2 6.2-16.3 0-22.6L207.6 160z"/></svg>
                </button>`
        },
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

    let $masonryGallery = $('.masonry-gallery').masonry({
        itemSelector: '.masonry-gallery__item',
        columnWidth: '.masonry-gallery__item--small',
        gutter: 10,
    });

    // layout Masonry after each image loads
    $masonryGallery.imagesLoaded().progress( function() {
        $masonryGallery.masonry('layout');
    });

    // smooth page scrolling
    $('.scrollto').click(function () {
        let elementClick = '#' + $(this).attr('href').split('#')[1];
        let destination = $(elementClick).offset().top;
        jQuery('html:not(:animated),body:not(:animated)').animate({scrollTop: destination - 0}, 800);
        return false;
    });

    // show/hide full information
    $('.more-info__button').on('click', function () {
        let moreInfoContent = $(this).closest('.more-info').find('.more-info__feature');
        moreInfoContent.fadeToggle();
        $(this).toggleClass('more-button--close');
        $(this).find('span').text( $(this).hasClass('more-button--close') ? 'Скрыть подробную информацию' : 'Показать подробную информацию');
    });

    // show/hide more objects
    $('.object-card__button-more').on('click', function () {
        let objectMore = $(this).closest('.object').find('.object-more');
        $(this).toggleClass('more-button--close');
        objectMore.fadeToggle();
        $(this).find('span').text( $(this).hasClass('more-button--close') ? 'Скрыть подробную информацию' : 'Показать подробную информацию');
    });

    // show/hide more gallery elements
    let galleryItemsHidden = $('.gallery-section .gallery__item:nth-child(n + 7)');
    galleryItemsHidden.fadeOut(0);

    $('.gallery-section__button').on('click', function () {
        galleryItemsHidden.fadeToggle();
        $(this).toggleClass('more-button--close');
        $(this).find('span').text( $(this).hasClass('more-button--close') ? 'Скрыть фотографии' : 'Показать все фотографии');
    });

    // show/hide more reviews
    let reviewsHidden = $('.reviews-list__item:nth-child(n + 4)');
    reviewsHidden.fadeOut(0);

    $('.guest-reviews__button-more').on('click', function () {
        reviewsHidden.fadeToggle();
        $('.reviews-list').toggleClass('reviews-list--show-all');
        $(this).toggleClass('more-button--close');
        $(this).find('span').text( $(this).hasClass('more-button--close') ? 'Скрыть отзывы' : 'Показать больше отзывов');
    });

    // init progress bar line
    function initProgressBarLine(selector, value) {
        if (document.querySelector(selector)) {
            let bar = new ProgressBar.Line(selector, {
                strokeWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                color: '#a7b51a',
                trailColor: '#e9e9e9',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'},
                text: {
                    className: 'indicators-list__label',
                    style: null,
                    autoStyleContainer: false
                },
                from: {color: '#d75c2b'},
                to: {color: '#a7b51a'},
                step: (state, bar) => {
                    bar.path.setAttribute('stroke', state.color);
                    $(bar.text).css({color:state.color});
                    bar.setText( (bar.value() * 10).toFixed(1) );
                }
            });

            bar.animate(value);  // Number from 0.0 to 1.0
        }
    }

    // overall rating
    initProgressBarLine('.js-overall-rating-housing', 0.85);
    initProgressBarLine('.js-overall-rating-service', 0.95);
    initProgressBarLine('.js-overall-rating-nutrition', 0.23);
    initProgressBarLine('.js-overall-rating-entertainment', 0.87);
    initProgressBarLine('.js-overall-rating-location', 0.51);
    // user 1 rating
    initProgressBarLine('.js-user-1-rating-housing', 0.85);
    initProgressBarLine('.js-user-1-rating-service', 0.97);
    initProgressBarLine('.js-user-1-rating-nutrition', 0.18);
    initProgressBarLine('.js-user-1-rating-entertainment', 0.75);
    initProgressBarLine('.js-user-1-rating-location', 0.51);
    // user 2 rating
    initProgressBarLine('.js-user-2-rating-housing', 0.85);
    initProgressBarLine('.js-user-2-rating-service', 0.97);
    initProgressBarLine('.js-user-2-rating-nutrition', 0.18);
    initProgressBarLine('.js-user-2-rating-entertainment', 0.75);
    initProgressBarLine('.js-user-2-rating-location', 0.51);
    // user 3 rating
    initProgressBarLine('.js-user-3-rating-housing', 0.85);
    initProgressBarLine('.js-user-3-rating-service', 0.97);
    initProgressBarLine('.js-user-3-rating-nutrition', 0.18);
    initProgressBarLine('.js-user-3-rating-entertainment', 0.75);
    initProgressBarLine('.js-user-3-rating-location', 0.51);
    // user 4 rating
    initProgressBarLine('.js-user-4-rating-housing', 0.85);
    initProgressBarLine('.js-user-4-rating-service', 0.97);
    initProgressBarLine('.js-user-4-rating-nutrition', 0.18);
    initProgressBarLine('.js-user-4-rating-entertainment', 0.75);
    initProgressBarLine('.js-user-4-rating-location', 0.51);
    // user 5 rating
    initProgressBarLine('.js-user-5-rating-housing', 0.85);
    initProgressBarLine('.js-user-5-rating-service', 0.97);
    initProgressBarLine('.js-user-5-rating-nutrition', 0.18);
    initProgressBarLine('.js-user-5-rating-entertainment', 0.75);
    initProgressBarLine('.js-user-5-rating-location', 0.51);
    // user 6 rating
    initProgressBarLine('.js-user-6-rating-housing', 0.85);
    initProgressBarLine('.js-user-6-rating-service', 0.97);
    initProgressBarLine('.js-user-6-rating-nutrition', 0.18);
    initProgressBarLine('.js-user-6-rating-entertainment', 0.75);
    initProgressBarLine('.js-user-6-rating-location', 0.51);

    // init progress bar circle
    function initProgressBarCircle(selector, value) {
        if (document.querySelector(selector)) {
            let bar = new ProgressBar.Circle(selector, {
                color: '#a7b51a',
                trailColor: '#e9e9e9',
                trailWidth: 12,
                duration: 1400,
                easing: 'bounce',
                strokeWidth: 12,
                text: {
                    className: 'circle-progress-bar__lable',
                },
                from: {color: '#d75c2b', a:0},
                to: {color: '#a7b51a', a:1},
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    $(circle.text).css({color:state.color});
                    circle.setText( (circle.value() * 10).toFixed(1) )
                },
            });

            bar.animate(value);  // Number from 0.0 to 1.0
        }
    }

    initProgressBarCircle('.js-circle-progress-bar-final', 0.95);
    initProgressBarCircle('.js-circle-progress-bar-review-1', 0.88);
    initProgressBarCircle('.js-circle-progress-bar-review-2', 0.93);
    initProgressBarCircle('.js-circle-progress-bar-review-3', 0.97);
    initProgressBarCircle('.js-circle-progress-bar-review-4', 0.95);
    initProgressBarCircle('.js-circle-progress-bar-review-5', 0.98);
    initProgressBarCircle('.js-circle-progress-bar-review-6', 0.95);

    // show/hide reviews
    $('.review__more').on('click', function () {
        $(this).hide();
        $(this).closest('.review').addClass('review--show');
    });

    $('.review__button-hide-more').on('click', function () {
        let review = $(this).closest('.review');
        review.removeClass('review--show');
        review.find('.review__more').show();
    });

    // init date range picker
    let datePickerField = $('.js-date-range-picker');

    datePickerField.daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
        //drops: 'up',
        locale: {
            format: 'MM/DD/YYYY',
            separator: " - ",
            cancelLabel: 'Отменить',
            applyLabel: 'Подтвердить',
            fromLabel: 'От',
            toLabel: 'До',
            customRangeLabel: 'Свой',
            weekLabel: 'W',
            daysOfWeek: [
                'Вс',
                'Пн',
                'Вт',
                'Ср',
                'Чт',
                'Пт',
                'Сб'
            ],
            monthNames: [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Ноябрь',
                'Декабрь'
            ],
            firstDay: 1
        }
    });

    datePickerField.on('apply.daterangepicker', function(ev, picker) {
        $(this).val( picker.startDate.format('DD/MM/YYYY') );
    });

    /*datePickerField.on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });*/

    //
    $('.steps__form').validate({
        rules: {
            'customer[first_name]': 'required',
            'customer[last_name]': 'required',
            'customer[email]': {
                required: true,
                email: true
            },
            'customer[password]': {
                required: true,
                minlength: 5,
            },
            'customer[confirmPassword]': {
                required: true,
                minlength: 5,
                equalTo: '#identification-last-confirm-password'
            },
        },
        messages: {
            'customer[first_name]': 'Это поле необходимо заполнить.',
            'customer[last_name]': 'Это поле необходимо заполнить.',
            'customer[email]': {
                required: 'Это поле необходимо заполнить.',
                email: 'Пожалуйста, введите корректный адрес электронной почты.'
            },
            'customer[password]': {
                required: 'Это поле необходимо заполнить.',
                minlength: 'Пожалуйста, введите не меньше {0} символов.'
            },
            'customer[confirmPassword]': {
                required: 'Это поле необходимо заполнить.',
                minlength: 'Пожалуйста, введите не меньше {0} символов.',
                equalTo: 'Пожалуйста, введите такой же пароль.'
            },
        },
    });

    // form validation
    $('.form').each(function () {
        $(this).validate({
            rules: {
                'email': {
                    required: true,
                    email: true
                },
                'password': {
                    required: true,
                    minlength: 3,
                },
                'object-description': 'required',
                'surname': 'required',
                'name': 'required',
                'middle-name': 'required',
                'age': 'required',
                'phone': 'required',
                'holiday-start-date': 'required',
                'holiday-end-date': 'required',
                'agreement': 'required',
                'review': 'required',
                'arrival-date': 'required',
                'date-departure': 'required',
                'adults': 'required',
                'children': 'required',
                'animals': 'required',
            },
            messages: {
                'email': '',
                'password': '',
                'object-description': '',
                'surname': '',
                'name': '',
                'middle-name': '',
                'age': '',
                'phone': '',
                'holiday-start-date': '',
                'holiday-end-date': '',
                'agreement': '',
                'review': '',
                'arrival-date': '',
                'date-departure': '',
                'adults': '',
                'children': '',
                'animals': '',
            },
        });

    });

    // masked input
    $('input[type="tel"]').mask("+7 (999) 999 99 99");

}); // end ready
