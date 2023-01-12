
// $(function() {
//   $('.header_nav li a').hover(function() {
//     $('.hover').show();
//   });
// });

const swiper = new Swiper(".swiper", {
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
});

$(function(){
  var scroll = $('#t-scroll');
  scroll.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 80) {
          scroll.fadeIn();
     } else {
          scroll.fadeOut();
     }
  });
  scroll.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

jQuery('.drawer_icon').on('click', function(e){
   e.preventDefault();

   jQuery('.drawer_icon').toggleClass('is_active');
   jQuery('.drawer_content').toggleClass('is_active');
   jQuery('.drawer_background').toggleClass('is_active');

   return false;
})

jQuery('.form_check,.privacy_btn-batsu,.btn_privacy').on('click', function(e){
   e.preventDefault();

   jQuery('.privacy').toggleClass('is_active');
   jQuery('.drawer_background').toggleClass('is_active');

   return false;
})

jQuery( function(){
   jQuery( '.drawer_background' ).click( function(){

      jQuery('.privacy').removeClass('is_active');
      jQuery('.drawer_background').removeClass('is_active');
      jQuery('.drawer_icon').removeClass('is_active');
      jQuery('.drawer_content').removeClass('is_active');

      return false;
   } );
 } );

jQuery('a[href^="#"]').on('click', function() {

   var header = jQuery ('header').innerHeight();
   var id = jQuery(this).attr('href');
   var position = 0;
   if ( id != '#') {
      var position = jQuery(id).offset().top - header;
   }
   var position = jQuery(id).offset().top - header;
   jQuery('html,body').animate({
      scrollTop: position
   },
   800);
});

jQuery('.header_nav li a').on('click', function() {
   jQuery('.header_nav li a').removeClass('header_active header_hover');
   jQuery(this).addClass('header_active')
   jQuery('.header_nav li a').not(this).addClass('header_hover')
})

jQuery('.qa_box-q').on('click', function() {
   jQuery(this).next().slideToggle();
   jQuery(this).children('.qa_box-icon').toggleClass('is_open')
})

// $('.header_nav li a').scroll(function () {
//    // var position = jQuery(id).offset().top + header + main;
//    if($(window).scrollTop() > 40) {
//      $('.header_nav li a').addClass('header_active');
//    } else {
//      $('.header_nav li a').removeClass('header_active');
//    }
//  }); スクリーンで各要素へ移動毎にクラスを追加,削除したい