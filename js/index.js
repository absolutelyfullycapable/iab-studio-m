$(function() {
    // a href="#" 기본 성격 제거
    $('a[href="#"]').on('click', function (e) {
      e.preventDefault();
    });

    // 헤더 메뉴 아이콘 클릭 시 내비게이션 애니메이션
    $('.menu_icon').on('click', function() {
      var show = $(this).hasClass('active');

      if(show == 0) {
        $('.nav_bg').addClass('darken');
        $(this).addClass('active');
        $('header').addClass('active');
        $('nav').addClass('active');
        $('html').css('overflow', 'hidden');
      } else {
        $('.nav_bg').removeClass('darken');
        $(this).removeClass('active');
        $('header').removeClass('active');
        $('nav').removeClass('active');
        $('html').css('overflow', 'initial');
      }
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

    // #go_to_top 누르면 화면 제일 위로 가기
    $('#go_to_top').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, 1100);
      $('header').removeClass('fade');
    });

    // 스크롤 시 나타나는 애니메이션
    var last_pos= 0;
    $(window).scroll(function() {
      var current_pos = $(window).scrollTop();

      if (current_pos > last_pos) {
        $('header').addClass('fade');
     } else {
        $('header').removeClass('fade');
     }

     last_pos = current_pos;
    });

    $(window).scroll(function() {
      var w_scroll = $(window).scrollTop(),
          hb_scroll = $('html, body').scrollTop() || $(window).scrollTop(),
          info = $('#info .info_txt .txt1').offset().top - $(window).height(),
          work = $('#works .gallery').offset().top - $(window).height(),
          info_title1 = $('.info_title1').offset().top,
          info_title2 = $('.info_title2').offset().top - $(window).height();

      // 제일 위로 스크롤 했을 때 header 애니메이션
      if(w_scroll == 0) {
        $('header').removeClass('fade');
      }

      // .info_txt .txt1 부분까지 스크롤 했을 때 더 알아보기 아이콘 나타남 + video 투명도 0
      if(info < w_scroll) {
          $('#learn_more').animate({left:20}, 500);
          $('video').css('opacity', 0);
      } else {
          $('#learn_more').stop(1,1).animate({left:-120}, 500);
          $('video').css('opacity', 1);
      }

      // 스크롤 시 위로 가는 아이콘 나타남
      if(w_scroll >= 300) {
        $('#go_to_top').stop().animate({opacity:1}, 500);
      } else {
        $('#go_to_top').stop().animate({opacity:0}, 500);
      }

      // .gallery까지 스크롤 했을 때 사진 애니메이션
      if(w_scroll > work) {
        $('#works ul li').addClass('showing');
      } else {
        $('#works ul li').removeClass('showing');
      }

      // .info_title2에서 200px 더 스크롤 했을 때 .box 나타나는 애니메이션
      if(hb_scroll >= info_title2 + 200) {
        $('.info_title2 .box').addClass('ta_da');
      } else {
        $('.info_title2 .box').removeClass('ta_da');
      }
    });
});