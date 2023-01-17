jQuery('.drawer_icon').on('click', function(e){
  e.preventDefault();

  jQuery('.drawer_icon').toggleClass('is_active');
  jQuery('.drawer_content').toggleClass('is_active');
  jQuery('.drawer_background').toggleClass('is_active');

  return false;
})

jQuery( function(){
  jQuery( '.drawer_background,a[href^="#"]').click( function(){

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
  300);
});

//googleform
let $form = $( '#js-form' )
$form.submit(function (e) {
  $.ajax({
   url: $form.attr('action'),
   data: $form.serialize(),
   type: "POST",
   dataType: "xml",
   statusCode: {
      0: function() {
        //送信に成功したときの処理
        $form.slideUp()
        $( '#js-success' ).slideDown()
      },
      200: function() {
        //送信に失敗したときの処理
        $form.slideUp()
        $( '#js-error' ).slideDown()
      }
    }
  });
  return false;
});

let $submit = $( '#js-submit' )
$( '#js-form input, #js-form textarea' ).on( 'change', function() {
  if(
    $( '#js-form input[type="text"]' ).val() !== "" &&
    $( '#js-form input[type="email"]' ).val() !== "" &&
    $( '#js-form input[name="entry.1595573110"]' ).prop( 'checked' ) === true
  ) {
    $submit.addClass( '-active' )
  }  else {
    $submit.removeClass( '-active' )
  }
});
