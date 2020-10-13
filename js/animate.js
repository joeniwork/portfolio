
$(window).scroll(function(evt){
  if ($(window).scrollTop()>100)
    $("#portfolio .m-title").addClass("fadeIn"),
    $("#portfolio .s-title").addClass("fadeIn delay-200ms"),
    $("#portfolio hr").addClass("fadeInRight delay-300ms"),
    $(".nav__wall button").addClass("fadeInUp delay-400ms"),
    $(".tab-content").addClass("fadeIn delay-500ms");

  if ($(window).scrollTop()>1300)
    $("#about .top").addClass("fadeInDown"),
    $("#about .left").addClass("fadeInLeft delay-200ms"),
    $("#about .right").addClass("fadeInRight delay-200ms");

    if ($(window).scrollTop()>1700)
    $(".about__wall .tree").addClass("treefadeUp delay-500ms"),
    $(".about__wall .content").addClass("fadeIn delay-400ms"),
    $(".content .bird").addClass("fadeIn delay-800ms");

    if ($(window).scrollTop()>1900)
    $(".content p.text").addClass("fadeIn delay-500ms"),
    $(".content .m-title").addClass("fadeIn delay-800ms"),
    $(".content .s-title").addClass("fadeIn delay-800ms"),
    $(".content .skill-box").addClass("fadeInDown delay-400ms"),
    $(".content .row p.m-title").addClass("fadeInUp delay-1s200ms"),
    $(".content .row p.s-title").addClass("fadeInUp delay-1s300ms"),
    $(".company .year").addClass("fadeInUp delay-1s200ms"),
    $(".company .compy-name").addClass("fadeInDown delay-1s300ms"),
    $(".company svg.point").addClass("fadeIn delay-1s700ms"),
    $("span.line").addClass("fadeIn delay-2s"),
    $("#about .footer").addClass("fadeInUp delay-300ms");

    if ($(window).scrollTop()>2700)
    $(".contentPage h1").addClass("fadeInUp delay-600ms"),
    $(".contentPage h2").addClass("fadeInDown delay-800ms");
});

$(function() {
  /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 500){
          $('#GoTop').fadeIn();
      } else {
          $('#GoTop').fadeOut();
      }
  });
});
