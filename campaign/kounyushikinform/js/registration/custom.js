$(function(){


/*
ユーザーエージェントで文字サイズ切替
================*/

var ua = navigator.userAgent;
if( ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) || ( ua.indexOf('windows') > 0 && ua.indexOf('phone') > 0) || ( ua.indexOf('firefox') > 0 && ua.indexOf('mobile') > 0) ) {
  $('html').css('font-size', '100%');
} else if( ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 || (ua.indexOf('windows') > 0 && ua.indexOf('touch') > 0) || ( ua.indexOf('firefox') > 0 && ua.indexOf('tablet') > 0) ) {
  $('html').css('font-size', '100%');
} else {
  $('html').css('font-size', '62.5%');
}


/*
enterで自動送信の抑止
================*/

  function submitStop(e){
      if(!e){
        var e = window.event;
      }
      if(e.keyCode == 13){
        return false;
      }
  }

  $(window).on('load', function() {
    var list = document.getElementsByTagName('input');
    for(var i=0; i<list.length; i++){
      if(list[i].type == 'text' || list[i].type == 'tel' || list[i].type == 'password'){
        list[i].onkeypress = function (event){
          return submitStop(event);
        };
      }
    }
  });


/*
ページを移動（離脱）するときに警告を出す
================*/

  var removeFlag = false;
  var pageformval = '';

  $('input[type=text]').each(function() {
    pageformval = pageformval + $(this).val();
  });

  if(pageformval != ''){
    removeFlag = true;
  };

  $('input,select,option').on('change keyup', function() {
    removeFlag = true;
  });

  $('input[type=submit],input[type=image]').on('click', function() {
    removeFlag = false;
  });

  $(window).on('beforeunload', function() {
    if(removeFlag){
      return 'このサイトを離れてもよろしいですか？行った変更が保存されない可能性があります。';
    }
  });

});