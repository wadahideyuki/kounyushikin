// JavaScript Document
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
});