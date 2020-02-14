$(document).ready(function () {
    'use strict';
    
    const element = document.documentElement;

    // is mobile
    const is_mobile = isMobile();
    if (is_mobile) {
        element.classList.add('is-mobile');

        // show/hide languages
        $('.language-switch').on('click', function () {
            $(this).toggleClass('language-switch--show');
        });
    }

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
        autoplay: true,
        autoplaySpeed: 4000,
    });

    // offer object slider
    $('.offer-object').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button class="offer-object__arrow offer-object__arrow--prev" type="button" aria-label="Назад"><span class="offer-object__icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 15.5 26.7" fill="#fff"><path d="M.4 12.5L12.6.4c.5-.5 1.3-.5 1.8 0l.7.7c.5.5.5 1.3 0 1.8L4.5 13.3l10.6 10.5c.5.5.5 1.3 0 1.8l-.7.7c-.5.5-1.3.5-1.8 0L.4 14.2c-.5-.5-.5-1.3 0-1.7z"/></svg></span></button>',
        nextArrow: '<button class="offer-object__arrow offer-object__arrow--next" type="button" aria-label="Вперед"><span class="offer-object__icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 15.5 26.7" fill="#fff"><path d="M15.1 14.2L2.9 26.3c-.5.5-1.3.5-1.8 0l-.7-.7c-.5-.5-.5-1.3 0-1.8L11 13.3.4 2.9c-.5-.5-.5-1.3 0-1.8l.7-.7c.5-.5 1.3-.5 1.8 0l12.3 12.1c.4.4.4 1.2-.1 1.7z"/></svg></span></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });

    // card slider
    $('.card-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
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
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
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
        gutter: 5,
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
        $(this).find('span').text( $(this).hasClass('more-button--close') ? 'Показать меньше отзывов' : 'Показать больше отзывов');
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
    let arrivalDate = $('input[name="arrival-date"]');
    let dateDeparture = $('input[name="date-departure"]');
    let holidayStartDate = $('input[name="holiday-start-date"]');
    let holidayEndDate = $('input[name="holiday-end-date"]');
    console.log(arrivalDate);

    datePickerField.daterangepicker({
        // singleDatePicker: true,
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
        let parent = $(this).closest('.modal-common');

        if ( parent.hasClass('modal-order') ) {
            arrivalDate.val( picker.startDate.format('DD/MM/YYYY') );
            dateDeparture.val( picker.endDate.format('DD/MM/YYYY') );
        }

        if ( parent.hasClass('modal-review') ) {
            holidayStartDate.val( picker.startDate.format('DD/MM/YYYY') );
            holidayEndDate.val( picker.endDate.format('DD/MM/YYYY') );
        }
    });

    /*datePickerField.on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });*/

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

    // init mmenu
    if (window.innerWidth < 1231) {
        $('#js-main-nav-mobile').mmenu({
            // wrappers: ["wordpress"],
            extensions: [
                'border-full',
                'fx-menu-slide',
                'fx-listitems-slide',
                'multiline',
                'pagedim-black',
            ],
            "counters": true,
            "setSelected": {
                "hover": true
            },
            navbar: {
                title: 'МЕНЮ'
            },
            "navbars": [
                {
                    "position": "top",
                    "content": `<a class="main-nav__logo" href="/">
                                    <picture>
                                        <source srcset="img/base/logo.webp" type="image/webp">
                                        <img src="img/base/logo.png" width="80" height="54" alt="Сельський туризм">
                                    </picture>
                                </a>`
                },
                {
                    "position": "bottom",
                    "content": `
                       <ul class="main-nav__social social-links social-links--gray">
                            <li class="social-links__item">
                                <a class="social-links__link" href="#" target="_blank" rel="noopener nofollow" title="Наш Вконтакте">
                                    <span class="visually-hidden">Наша группа в ВК</span>
                                    <svg width="18" height="16" viewBox="0 0 576 512" fill="#aaa" xmlns="http://www.w3.org/2000/svg"><path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"></path></svg>
                                </a>
                            </li>
                            <li class="social-links__item">
                                <a class="social-links__link" href="#" target="_blank" rel="noopener nofollow" title="Наш Инстаграм">
                                    <span class="visually-hidden">Наша страница в Instagram</span>
                                    <svg width="15" height="18" viewBox="0 0 448 512" fill="#aaa" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                </a>
                            </li>
                        </ul> `
                }
            ]
        });
    }

    // read more
    $('.host-blog__excerpt').readmore({
        speed: 500,
        collapsedHeight: 205,
        moreLink: `<p class="host-blog__back-link-box">
                       <span class="host-blog__back-link arrow-link arrow-link--to-right"><span>Читать больше</span></span>
                   </p>`,
        lessLink: `<p class="host-blog__back-link-box">
                       <span class="host-blog__back-link arrow-link arrow-link--to-left"><span>Читать меньше</span></span>
                   </p>`,
    });

    $('.object-about__txt').readmore({
        speed: 500,
        collapsedHeight: 205,
        moreLink: `<p class="object-about__more-box">
                       <a class="object-about__more arrow-link arrow-link--to-right" href="#"><span>Читать больше</span></a>
                   </p>`,
        lessLink: `<p class="object-about__more-box">
                       <a class="object-about__more arrow-link arrow-link--to-left" href="#"><span>Читать меньше</span></a>
                   </p>`,
    });

    $('.slider-interesting__txt').readmore({
        speed: 500,
        collapsedHeight: 130,
        moreLink: `<p class="slider-interesting__more-box">
                       <span class="slider-interesting__more arrow-link arrow-link--to-right"><span>Читать больше</span></span>
                   </p>`,
        lessLink: `<p class="slider-interesting__more-box">
                       <span class="slider-interesting__more arrow-link arrow-link--to-left"><span>Читать меньше</span></span>
                   </p>`,
    });

    ////////////////////////////////////////////////////////////////////////////
    // DESKTOP MULTI-LEVEL MENU
    let navItemFirstLevel = $('.nav-dropdown__list--level-1 li');
    let navItemSecondLevel = $('.nav-dropdown__list--level-2 li');
    let regionsList = $('.nav-dropdown__list--level-2');
    let areasList = $('.nav-dropdown__list--level-3');

    // 1st level – set default country
    $('.nav-dropdown__list--level-1 li:first').addClass('nav-dropdown__item-level-1--active');

    // 2nd level – default region activation
    regionsList.find('li:first').addClass('nav-dropdown__item-level-2--active');

    navItemFirstLevel.on('click', function () {
        let navLinkFirstLevel = $(this).find('[data-show]');
        let country = navLinkFirstLevel.attr('data-show');

        // show/hide 1st level
        navItemFirstLevel.removeClass('nav-dropdown__item-level-1--active');
        $(this).addClass('nav-dropdown__item-level-1--active');

        // show/hide 2nd level
        regionsList.hide();
        let currentRegionsList = $(`.${country}`);

        currentRegionsList.show();

        // show/hide 3rd level
        let currentRegionLink = currentRegionsList.find('.nav-dropdown__item-level-2--active a');
        let area = currentRegionLink.attr('data-show');
        let currentAreasList = $(`.${area}`);

        areasList.hide();
        currentAreasList.show();
    });

    navItemSecondLevel.on('mouseover', function () {
        let currentRegionsList = $(this).closest('ul');
        currentRegionsList.find('.nav-dropdown__item-level-2--active').removeClass('nav-dropdown__item-level-2--active');
        $(this).addClass('nav-dropdown__item-level-2--active');

        let navLinkSecondLevel = $(this).find('[data-show]');
        let area = navLinkSecondLevel.attr('data-show');

        areasList.hide();
        $(`.${area}`).show();
    });
    ////////////////////////////////////////////////////////////////////////////

    // masked input
    $('input[type="tel"]').mask("+7 (999) 999 99 99");

    // is mobile
    function isMobile() {
        return $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    }

}); // end ready
