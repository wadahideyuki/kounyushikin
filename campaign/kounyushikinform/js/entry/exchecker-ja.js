/*!
 * exchecker-ja
 *
 * @version   : 1.1
 * @author    : nori (norimania@gmail.com)
 * @copyright : 5509 (http://5509.me/)
 * @license   : The MIT License
 * @link      : http://5509.me/log/exvalidation
 * @modified  : 2012-04-09 16:52
 */
;(function($) {
  // Extend validation rules
  //*********************
  //工コン
  //*********************
  $.exValidationRules = $.extend($.exValidationRules, {
    chkrequiredmail: [
      "メールアドレスを入力してください",
      function(txt, t) {
        if ( $(t).hasClass("chkgroup") ) {
          var flag = 0;
          $("input,select",t).each(function() {
            if ( $(this).val().length > 0 ) flag++;
          });
          if ( txt && flag === $("input,select", t).length ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        } else {
          if ( txt && txt.length>0 ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        }
      }
    ],
    chkemail: [
      "メールアドレスの形式が不完全です",
      /^(?:[^\@]+?@[A-Za-z0-9_\.\-]+\.+[A-Za-z\.\-\_]+)*$/
    ],
    chkretype: [
      "メールアドレスと確認用メールアドレスが異なります",
      function(txt, t) {
        var elm = $("#" + $(t).attr("class").split("retype\-")[1].split(/\b/)[0]);
        if ( elm.hasClass("chkgroup") ) {
          var chktxt = $("input", elm), txt = $("input", t);
          for ( var i = 0, flag = false; i < chktxt.length; i++ ) {
            if ( chktxt[i].value === txt[i].value ) {
              flag = true;
            } else {
              flag = false;
              break;
            }
          }
          if ( flag ) return true;
        } else {
          return elm.val() == txt;
        }
      }
    ],
    chkselect: [
      "都道府県をご選択ください",
      function(txt, t) {
        if ( txt && txt.length>0 ) {
          if ( /^[ 　\r\n\t]+$/.test(txt) ) {
            return false;
          } else {
            return true;
          }
        }
      }
    ],
    chktelmin6: [
      "電話番号を入力してください",
		function(txt, t) {
			if ( txt && txt.length>0 ) {
				if ( /^[ 　\r\n\t]+$/.test(txt) ) {
					return false;
				} else {
					var length = $(t).attr("class").match(/min(\d+)/) ? RegExp.$1 : null;
					return txt.length >= length;
				}
			}
		}
    ],
    chktelhyphen: [
      "ハイフンは入れないで記載してください",
      /^(?:[^\-]+)*$/
    ],
    chknumonly: [
      "半角数字で入力してください",
      /^(?:[0-9]+)*$/
    ],
    chkhankaku: [
      "半角文字で入力ください",
      /^(?:[a-zA-Z0-9@\<\>\;\:\[\]\{\}\|\^\=\/\!\*\`\"\#\$\+\%\&\'\(\)\,\.\-\_\?\\\s]*)*$/
    ],
    chkradio: [
      "ご選択ください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
    chkcheckboxterm: [
      "応募規約に同意ください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
    chkrequiredpos: [
      "郵便番号を入力してください",
      function(txt, t) {
        if ( $(t).hasClass("chkgroup") ) {
          var flag = 0;
          $("input,select",t).each(function() {
            if ( $(this).val().length > 0 ) flag++;
          });
          if ( txt && flag === $("input,select", t).length ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        } else {
          if ( txt && txt.length>0 ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        }
      }
    ],
    chkformaddrfull: [
      "住所は都道府県から番地まで正しく入力してください",
		function(txt, t) {
			if ( txt && txt.length>0 ) {
				if ( /(北海道|東京都|(大阪|京都)府|(神奈川|和歌山|鹿児島)県|[^\s\w\d　]{2}県)[^\s\w\d　]{1,6}[市郡区町村][^\s\w\d　]{1,20}[\d０-９〇一-九十上下東西]/ .test(txt) ) {
					return true;					
				} else {
					return false;
				}
			} else {
				return true;
			}
		}
    ],
    chkrequiredaddrfull: [
      "住所を入力してください",
      function(txt, t) {
        if ( $(t).hasClass("chkgroup") ) {
          var flag = 0;
          $("input,select",t).each(function() {
            if ( $(this).val().length > 0 ) flag++;
          });
          if ( txt && flag === $("input,select", t).length ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        } else {
          if ( txt && txt.length>0 ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        }
      }
    ],
    chkrequiredname: [
      "お名前を入力してください",
      function(txt, t) {
        if ( $(t).hasClass("chkgroup") ) {
          var flag = 0;
          $("input,select",t).each(function() {
            if ( $(this).val().length > 0 ) flag++;
          });
          if ( txt && flag === $("input,select", t).length ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        } else {
          if ( txt && txt.length>0 ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        }
      }
    ],
    chkzenkakuname: [
      "お名前は全角で入力してください",
      /^(?:[^a-zA-Z0-9@\<\>\;\:\[\]\{\}\|\^\=\/\!\*\"\#\$\+\%\&\'\(\)\,\.\-\_\?\\\s]+)*$/
    ],
    chkzenkakukananame: [
      "全角カナで入力してください",
		function(txt, t) {
			if ( txt && txt.length>0 ) {
				if ( /^[ア-ン゛゜ァ-ォャ-ョー「」、]+$/ .test(txt) ) {
					return true;					
				} else {
					return false;
				}
			} else {
				return true;
			}
		}
    ],
    chkrequiredkananame: [
      "フリガナを入力してください",
      function(txt, t) {
        if ( $(t).hasClass("chkgroup") ) {
          var flag = 0;
          $("input,select",t).each(function() {
            if ( $(this).val().length > 0 ) flag++;
          });
          if ( txt && flag === $("input,select", t).length ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        } else {
          if ( txt && txt.length>0 ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        }
      }
    ],
    chkrequired: [
    "入力してください",
  function(txt, t) {
    if ( $(t).hasClass("chkgroup") ) {
      var flag = 0;
      $("input,select",t).each(function() {
        if ( $(this).val().length > 0 ) flag++;
      });
      if ( txt && flag === $("input,select", t).length ) {
        if ( /^[ 　\r\n\t]+$/.test(txt) ) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      if ( txt && txt.length>0 ) {
        if ( /^[ 　\r\n\t]+$/.test(txt) ) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
  ]
  });
})(jQuery);
