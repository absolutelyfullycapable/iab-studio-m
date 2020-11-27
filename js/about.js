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

    // Swiper 플러그인
    var swiper = new Swiper('.swiper-container', {
        slidesPerView:'auto'
    });

    // 스크롤 시 history section 효과
    $(window).scroll(function() {
        var w_scroll = $(window).scrollTop(),
            history = $('#history').offset().top;

        if(w_scroll >= history - 300) {
            $('.history_title').addClass('active');
        } else {
            $('.history_title').removeClass('active');
        }
    });
});