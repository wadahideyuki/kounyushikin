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
  //本登録
  //*********************
  $.exValidationRules = $.extend($.exValidationRules, {
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
    chkkatakanakananame: [
      "フリガナは全角カタカナで入力してください",
      /^(?:[ァ-ヾ]+)*$/
    ],
    birthdatechkselect: [
      "生年月日を選択してください",
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
    sexchkcheckbox: [
      "性別を選択してください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
    telchkmin10: [
      "電話番号を数字10桁以上で入力してください",
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
    poschkmin7: [
      "郵便番号を数字7桁で入力してください",
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
    chknumonly: [
      "半角数字で入力してください",
      /^(?:[0-9]+)*$/
    ],
    prefchkselect: [
      "都道府県を選択してください",
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
    chkrequiredaddress: [
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
    chkcity: [
      "市区町村を正しく入力してください",
      function(txt, t) {
        if ( txt && txt.length>0 ) {
          if ( /[^\s\w\d　]{1,6}[市郡区町村][^\s\w\d　]{1,20}/ .test(txt) ) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      }
    ],
    chkblock: [
      "番地を正しく入力してください",
      function(txt, t) {
        if ( txt && txt.length>0 ) {
          if ( /[\d０-９〇一-九十上下東西]/ .test(txt) ) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      }
    ],
    jobchkselect: [
      "ご職業を選択してください",
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
    carchkradio: [
      "選択してください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
    chkhankaku: [
      "パスワードは半角英数記号で入力してください",
      /^(?:[a-zA-Z0-9@\<\>\;\:\[\]\{\}\|\^\=\/\!\*\`\"\#\$\+\%\&\'\(\)\,\.\-\_\?\\\s]*)*$/
    ],
    passchkmin6: [
      "パスワードは6文字以上50文字以下で入力してください",
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
    passchkmax50: [
      "パスワードは6文字以上50文字以下で入力してください",
      function(txt, t) {
        var length = $(t).attr("class").match(/max(\d+)/) ? RegExp.$1 : null;
        return txt.length <= length;
      }
    ],
    passchkretype: [
      "パスワードが一致しません",
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
    messagechkcheckbox: [
      "少なくとも1つどれかを選択してください",
      function(txt, t) {
        return $("input:checked",t).length>0;
      }
    ],
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
    mailchkretype: [
      "メールアドレスが一致しません",
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
    makerchkselect: [
      "メーカーを選択してください",
      function(txt, t) {
        var ownVal = $('#ownBox [name="own"]:checked').val();
        if(ownVal == '1' || ownVal == '2' || ownVal == '3'){
          if ( txt && txt.length>0 ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        }else{
          return true;
        }
      }
    ],
    carchkselect: [
      "車種名を選択してください",
      function(txt, t) {
        var ownVal = $('#ownBox [name="own"]:checked').val();
        var maker = $('#maker').val();
        if(ownVal == '1' || ownVal == '2' || ownVal == '3'){

          if (maker && $.trim(maker) >= 13){
            // ベンツなど外国メーカーは車種は必須でない
            return true;
          }else{
            if ( txt && txt.length>0 ) {
              if ( /^[ 　\r\n\t]+$/.test(txt) ) {
                return false;
              } else {
                return true;
              }
            }
          }
        }else{
          return true;
        }
      }
    ],
    carinspectionchkselect: [
      "次回車検時期を選択してください",
      function(txt, t) {
        var ownVal = $('#ownBox [name="own"]:checked').val();
        if(ownVal == '1' || ownVal == '2' || ownVal == '3'){
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
        }else{
          return true;
        }
      }
    ],
    registhkselect: [
      "登録年月を選択してください",
      function(txt, t) {
        var ownVal = $('#ownBox [name="own"]:checked').val();
        if(ownVal == '1' || ownVal == '2' || ownVal == '3'){
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
        }else{
          return true;
        }
      }
    ],
    ownershipcarnamechkselect: [
      "車種名を選択してください",
      function(txt, t) {
        var ownershipVal = $('#ownershipBox [name="ownership"]:checked').val();
        if(ownershipVal == '1' || ownershipVal == '2'){
          if ( txt && txt.length>0 ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        }else{
          return true;
        }
      }
    ],
    storeinput: [
      "営業店名を入力してください",
      function(txt, t) {
        var has_dealer = $('input[name="has_dealer"]:checked').val();
        if (has_dealer == 'y'){
          if ( txt && txt.length>0 ) {
            if ( /^[ 　\r\n\t]+$/.test(txt) ) {
              return false;
            } else {
              return true;
            }
          }
        }else{
          return true;
        }
      }
    ],

  });
})(jQuery);
