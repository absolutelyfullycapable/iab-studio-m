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
        slidesPerView:'auto',
        freeMode: true
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
          history = $('#history').offset().top;

      // #go_to_top 아이콘 나타남
      if(w_scroll >= 300) {
        $('#go_to_top').stop().animate({opacity:1}, 500);
      } else {
        $('#go_to_top').stop().animate({opacity:0}, 500);
      }

      // header 애니메이션
      if(w_scroll == 0) {
        $('header').removeClass('fade');
      }

      // history section 애니메이션
      if(w_scroll >= history - 300) {
        $('.history_title').addClass('active');
      } else {
        $('.history_title').removeClass('active');
      }
    });
});