$(function() {
    // a href="#" 기본 성격 제거
    $('a[href="#"]').on('click', function (e) {
      e.preventDefault();
    });

    // 헤더 메뉴 아이콘 누르면 내비게이션 나타나는 애니메이션
    $('.menu_icon').on('click', function() {
      var show = $(this).hasClass('active');

      if(show == 0) {
        $(this).addClass('active');
        $('header').addClass('active');
        $('nav').addClass('active');
      } else {
        $(this).removeClass('active');
        $('header').removeClass('active');
        $('nav').removeClass('active');
      }
    });

    // .tap 누르면 검색창 나타나는 애니메이션
    $('.tap').on('click', function() {
      $('form').toggleClass('act');
    });

    // Swiper 플러그인
    var swiper = new Swiper('.swiper-container', {
        slidesPerView:'auto'
    });

    var news_swiper = new Swiper('.news-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    // 마우스휠 플러그인
    $(window).on('mousewheel', function(event, delta){
      if(delta > 0) { 
        $('header').removeClass('fade');
      } else if(delta < 0){
        $('header').addClass('fade');
      }
    });

    // #go_to_top 누르면 화면 제일 위로 가기
    $('#go_to_top').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, 1100);
    });

    // 스크롤 시 나타나는 애니메이션
    $(window).scroll(function() {
      var w_scroll = $(window).scrollTop(),
          hb_scroll = $('html, body').scrollTop() || $(window).scrollTop(),
          info = $('#info .info_txt .txt1').offset().top - $(window).height(),
          work = $('#works .gallery').offset().top - $(window).height(),
          info_title1 = $('.info_title1').offset().top,
          info_title2 = $('.info_title2').offset().top - $(window).height(),
          info_txt1 = $('.title_txt1'),
          info_txt2 = $('.title_txt2'),
          info_txt3 = $('.title_txt3');

      if(info < w_scroll) {
          $('#learn_more').animate({left:20}, 500);
      } else {
          $('#learn_more').stop(1,1).animate({left:-120}, 500)
      }

      if(w_scroll >= 300) {
        $('#go_to_top').stop().animate({opacity:1}, 500);
      } else {
        $('#go_to_top').stop().animate({opacity:0}, 500);
      }

      if(w_scroll > work) {
        $('#works ul li').addClass('showing');
      } else {
        $('#works ul li').removeClass('showing');
      }

      if(hb_scroll >= info_title2 + 200) {
        $('.info_title2 .box').addClass('ta_da');
      } else {
        $('.info_title2 .box').removeClass('ta_da');
      }

      // if(hb_scroll >= info_title1 - $(window).height() && hb_scroll < info_title1 - $(window).height() + $(window).height()/2) {
      //   var moveX = Math.floor((100 * (hb_scroll - info_title1 + $(window).height()) / $(window).height() * 2));
      //   info_txt1.css('transform','translateX(' + (-moveX) + '%)');
      //   info_txt2.css('transform','translateX(' + moveX + '%)');
      //   info_txt3.css('transform','translateX(' + (-moveX * 1.5) + '%)');
      // } else if(hb_scroll >= info_title1 - $(window).height() + $(window).height()/2) {
      //     info_txt1.css('transform','translateX(' + (-100) + '%)');
      //     info_txt2.css('transform','translateX(' + 100 + '%)');
      //     info_txt3.css('transform','translateX(' + (-150) + '%)');
      // }
    });
});