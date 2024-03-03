$(document).ready(function () {
    // main--------
    $('nav a').append('<span class=underline></span>');

    const scrollToBtn = $('.home_btn');
    const scrollToEl = $('main');
    scrollToBtn.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl.offset().top,
            },
            800 //speed
        );
    });

    const scrollToBtn1 = $('.artist_btn');
    const scrollToEl1 = $('.artist');
    scrollToBtn1.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl1.offset().top,
            },
            800 //speed
        );
    });

    const scrollToBtn2 = $('.about_btn');
    const scrollToEl2 = $('.About');
    scrollToBtn2.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl2.offset().top,
            },
            800 //speed
        );
    });

    const scrollToBtn3 = $('.contact_btn');
    const scrollToEl3 = $('.Contact');
    scrollToBtn3.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl3.offset().top,
            },
            800 //speed
        );
    });

    $('.sub_menu a').append('<span class=underline></span>');

    const scrollToSubBtn = $('.sub_home_btn');
    const scrollToEl4 = $('main');
    scrollToSubBtn.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl4.offset().top,
            },
            800 //speed
        );
    });

    const scrollToSubBtn2 = $('.sub_artist_btn');
    const scrollToEl5 = $('.artist');
    scrollToSubBtn2.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl5.offset().top,
            },
            800 //speed
        );
    });

    const scrollToSubBtn3 = $('.sub_about_btn');
    const scrollToEl6 = $('.About');
    scrollToSubBtn3.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl6.offset().top,
            },
            800 //speed
        );
    });

    const scrollToSubBtn4 = $('.sub_contact_btn');
    const scrollToEl7 = $('.Contact');
    scrollToSubBtn4.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl7.offset().top,
            },
            800 //speed
        );
    });



    // popUp ---------------
    //kyuhyun

    $('.kyuHyun_cd').on('click', function () {
        $('.dark').fadeIn(500)
        $('.music_popUp').fadeIn();
    });

    $('.fa-circle-xmark').on('click', function () {
        $('.dark').hide()
        $('.music_popUp').hide();
    });
    $('.dark').on('click', function () {
        $('.dark').hide()
        $('.music_popUp').hide();
    });

    //Hyolee

    $('.hyolee_cd').on('click', function () {
        $('.dark').fadeIn(500)
        $('.music_popUp2').fadeIn();
    });

    $('.fa-circle-xmark').on('click', function () {
        $('.dark').hide()
        $('.music_popUp2').hide();
    });
    $('.dark').on('click', function () {
        $('.dark').hide()
        $('.music_popUp2').hide();
    });

    //Lee jin
    $('.leejin_cd').on('click', function () {
        $('.dark').fadeIn(500)
        $('.music_popUp3').fadeIn();
    });

    $('.fa-circle-xmark').on('click', function () {
        $('.dark').hide()
        $('.music_popUp3').hide();
    });
    $('.dark').on('click', function () {
        $('.dark').hide()
        $('.music_popUp3').hide();
    });

    //kwonjin

    $('.kwonjin_cd').on('click', function () {
        $('.dark').fadeIn(500)
        $('.music_popUp4').fadeIn();
    });

    $('.fa-circle-xmark').on('click', function () {
        $('.dark').hide()
        $('.music_popUp4').hide();
    });
    $('.dark').on('click', function () {
        $('.dark').hide()
        $('.music_popUp4').hide();
    });

    //sub---------

    $('.trigger').on('click',function(){
        $('.sub_menu').fadeIn();
    })
    $('.sub_close').on('click', function () {
        $('.sub_menu').fadeOut();
    });


    // scroll---------

    $(window).on('scroll', function () {
        var windowHeight = $(window).height();
        var scrollPosition = $(this).scrollTop();

        $('.artist_grid_container1 img').each(function () {
            var positionFromTop = $(this).offset().top;

            if (positionFromTop - windowHeight <= scrollPosition) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });

        $('.artist_grid_container2 img').each(function () {
            var positionFromTop = $(this).offset().top;

            if (positionFromTop - windowHeight <= scrollPosition) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
        $('.artist_grid_container3 img').each(function () {
            var positionFromTop = $(this).offset().top;

            if (positionFromTop - windowHeight <= scrollPosition) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });

});

