$(function(){
  $('.form_area .tabs a').click(function(){
    if ( ! $(this).hasClass('active') ) {
      $('.form_area .tabs a').removeClass('active');
      $(this).addClass('active');
      switchActive($('.form_area .tabs a'));
      $('.form_area .windows > div').removeClass('active');
      $('.form_area .windows .'+$(this).data('target')).addClass('active');
    }
    return false;
  });

	$(window).on('load', function() {
    // form
    exvalidationgo();
    var validation = $('.form_area .a form').exValidation({
      rules: {
        wrapEmail1: "chkrequired chkemail",
        wrapConfirm: "chkrequired chkemail chkretype-form01"
      },
        errTipCloseBtn: false,
        errInsertPos: 'after',
        errPosition: 'fixed',
        stepValidation: true
    });

    exvalidationgo();
    var validation = $('.form_area .b form').exValidation({
      rules: {
        wrapEmail2: "chkrequired chkemail",
        wrapPassword: "chkrequired"
      },
        errTipCloseBtn: false,
        errInsertPos: 'after',
        errPosition: 'fixed',
        stepValidation: true
    });
	});

  function switchActive(el) {
    $(el).each(function(){
      var src = $(this).find('img').attr('src'), new_src;
      if ( $(this).hasClass('active') ) {
        new_src = src.replace(/(\.gif|\.jpg|\.png)/g, '_on$1');
      } else {
        new_src = src.replace(/_on/, '');
      }
      $(this).find('img').attr('src', new_src);
    });
  }


  //popup

  $('.btn-term').click(function(){
    $('#term .body').css('height', ($(window).height() * 2/3)+'px');
    $('#term').fadeIn();
    return false;
  });

  $('#term .close').click(function(){
    $('#term').hide();
    return false;
  });
  $('.btn-ie').click(function(){
    $('#ie-box .body').css('height', ($(window).height() * 2/3)+'px');
    $('#ie-box').fadeIn();
    return false;
  });

  $('#ie-box .close').click(function(){
    $('#ie-box').hide();
    return false;
  });

});
