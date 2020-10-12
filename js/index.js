$(function() {
    // a href="#" 기본 성격 제거
    $('a[href="#"]').on('click', function (e) {
      e.preventDefault();
    });

    // 헤더 메뉴 아이콘 누르면 내비게이션 나타나는 애니메이션
    $('.menu_icon').on('click', function() {
      var show = $(this).hasClass('active');
      if(show == 0) {
        $('.main').animate({opacity: 0.5});
        $('footer').animate({opacity: 0.5});
        $(this).addClass('active');
        $('header').addClass('active');
        $('nav').addClass('active');
      } else {
        $('.main').animate({opacity: 1});
        $('footer').animate({opacity: 1});
        $(this).removeClass('active');
        $('header').removeClass('active');
        $('nav').removeClass('active');
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
    });

    // 스크롤 시 나타나는 애니메이션
    $(window).scroll(function() {
      let w_scroll = $(window).scrollTop();
      let obj = $('#info').offset().top - $(window).height();
      let work = $('#works .gallery').offset().top - $(window).height();
      let info_title2 = $('.info_title2').offset().top - $(window).height();

      if(obj < w_scroll) {
          $('#learn_more').animate({right:40}, 500);
      } else {
          $('#learn_more').stop(1,1).animate({right:-120}, 500)
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

      if(w_scroll > info_title2 + 100) {
        $('.info_title2 .box').stop().animate({opacity:1}, 500);
      } else {
        $('.info_title2 .box').stop().animate({opacity:0}, 200);
      }
  });
});