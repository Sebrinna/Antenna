
$(document).ready(function(){
  $('nav a').append('<span class=underline></span>');

    
    const scrollToBtn1 = $('.album_btn');
    const scrollToEl1 = $('.Album');
    scrollToBtn1.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl1.offset().top,
            },
            800 //speed
        );
    });

    const scrollToBtn2 = $('.video_btn');
    const scrollToEl2 = $('.Video');
    scrollToBtn2.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl2.offset().top,
            },
            800 //speed
        );
    });

    const scrollToBtn3 = $('.concert_btn');
    const scrollToEl3 = $('.Concert');
    scrollToBtn3.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl3.offset().top,
            },
            800 //speed
        );
    });
    const scrollToBtn4 = $('.content_btn');
    const scrollToEl4 = $('.Content');
    scrollToBtn4.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl4.offset().top,
            },
            800 //speed
        );
    });

    $('.sub_menu a').append('<span class=underline></span>');

    const scrollToSubBtn = $('.sub_album_btn');
    const scrollToEl5 = $('.Album');
    scrollToSubBtn.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl5.offset().top,
            },
            800 //speed
        );
    });

    const scrollToSubBtn2 = $('.sub_video_btn');
    const scrollToEl6 = $('.Video');
    scrollToSubBtn2.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl6.offset().top,
            },
            800 //speed
        );
    });

    const scrollToSubBtn3 = $('.sub_concert_btn');
    const scrollToEl7 = $('.Concert');
    scrollToSubBtn3.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl7.offset().top,
            },
            800 //speed
        );
    });

    const scrollToSubBtn4 = $('.sub_content_btn');
    const scrollToEl8 = $('.Content');
    scrollToSubBtn4.click(() => {
        $('html').animate(
            {
                scrollTop: scrollToEl8.offset().top,
            },
            800 //speed
        );
    });

    $('.trigger').on('click',function(){
      $('.sub_menu').fadeIn();
  })
  $('.sub_close').on('click', function () {
      $('.sub_menu').fadeOut();
  });
})

var swiper1 = new Swiper(".mySwiper1", {
  loop:true,
  slidesPerView: 4,
  spaceBetween: 130,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var Swiper2 = new Swiper(".mySwiper2", {
  loop:true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var Swiper3 = new Swiper(".mySwiper3", {
  loop:true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


