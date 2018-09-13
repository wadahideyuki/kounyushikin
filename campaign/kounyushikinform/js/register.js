$(function(){
  exvalidationLoad();
  var validation = $('#form01').exValidation({
    rules: {
      nameBox: "chkgroup chkrequiredname",
      kanaBox: "chkgroup chkrequiredkananame chkkatakanakananame",
      genderBox: "sexchkcheckbox",
      telBox: "chkgroup telchkmin10 chknumonly",
      posBox: "chkgroup poschkmin7 chknumonly",
      address01: "prefchkselect",
      address02Box: "chkgroup chkrequiredaddress chkcity",
      address03Box: "chkgroup chkrequiredaddress chkblock",
      job_id: "jobchkselect",
      ownershipBox: "carchkradio",
      purchase_timeBox: "carchkradio",
      purchase_degreeBox: "carchkradio",
      visitingBox: "carchkradio",
      interestBox: "carchkradio",
      permitBox: "carchkradio",
      has_dealerBox: "carchkradio",
      ownBox: "carchkradio",
      pass01Box: "chkgroup passchkmin6 passchkmax50 chkhankaku",
      pass02: "passchkmin6 passchkmax50 chkhankaku passchkretype-pass01",

      maker : "makerchkselect",
      car_id : "carchkselect",
      car_inspection_ym : "chkgroup carinspectionchkselect",
      regist_ym : "chkgroup registhkselect",
      ownership_carname : "ownershipcarnamechkselect",
      store : "storeinput",





      //messageBox: "chkgroup messagechkcheckbox"
    },
    errInsertPos: 'after',
    stepValidation: true,
    errPosition: 'fixed',
    errTipCloseBtn: false,
    errMsgPrefix : ''
  });

/*
日を年月に応じて自動調整
================*/

  function changeDay(){
    var result    = false,
      formId    = 'form01', // フォームのID名
      yearName  = 'year',       // 年セレクトボックスのname属性値
      monthName = 'month',      // 月セレクトボックスのname属性値
      dayName   = 'day',        // 日セレクトボックスのname属性値
      formObj   = document.getElementById(formId);

    if (formObj) {
      var yearObj  = formObj[yearName],
        monthObj = formObj[monthName],
        dayObj   = formObj[dayName],
        selectY  = yearObj.options[yearObj.selectedIndex].value,
        selectM  = monthObj.options[monthObj.selectedIndex].value,
        selectD  = dayObj.options[dayObj.selectedIndex].value,
        dateObj  = new Date(selectY, selectM, 0),
        maxDays  = dateObj.getDate();

      dayObj.length = 0;

      dayObj.options[1] = new Option('日','', true);

      for (var i = 1; i <= maxDays; i++) {
        dayObj.options[i+1] = new Option(i, i);
      }

      dayObj.removeChild(dayObj.options[0]);

      if (selectD > dayObj.length - 1) {
        dayObj.options[dayObj.length - 1].selected = true;
      } else {
        if(selectD == ''){
          dayObj.options[0].selected = true;
        }else{
          dayObj.options[selectD].selected = true;
        }
      };

      result = true;
    };
    return result;
  };

  var yearSelect  = document.getElementById('year'),
    monthSelect = document.getElementById('month');

  yearSelect.onchange = function() {
    changeDay();
  };

  monthSelect.onchange = function() {
    changeDay();
  };

  /*
  ご職業？の質問によって、ご職業その他の入力可否が変わる
  ================*/

    var job_id = $('#job_id').val();
    var job_id_other_flag = true;
    if(job_id != '99'){
      $('#job_id_other_tr').hide(0, function() {
        job_id_other_flag = false;
      });
    }

    $('#job_id').on('change', function() {
      job_id = $(this).val();
      if(job_id == '99'){
        $('#job_id_other_tr').fadeIn(1000, function() {
          job_id_other_flag = true;
        });
      } else {
        $('#job_id_other_tr').fadeOut(1000, function() {
          job_id_other_flag = false;
        });
      }
    });

/*
お車を所有していますか？の質問によってお持ちの車の選択可否が変わる
================*/

  var ownVal = $('#ownBox [name="own"]:checked').val(),
  ownFlag = false;

  if(ownVal == '1' || ownVal == '2' || ownVal == '3'){
    $('#maker').attr('disabled', false);
    ownFlag = true;
  } else {
    ownFlag = false;

    $('#maker_tr').hide(0, function() {
      $('#maker').attr('disabled', true);
      $('#maker').val('');
      $('#maker_id_other').val('');
    });
    $('#car_tr').hide(0, function() {
      $('#car_tr').val('');
      $('#car_id_other').val('');
    });
    $('#car_inspection_year_tr').hide(0, function() {
      $('#car_inspection_year').val('');
      $('#car_inspection_month').val('');
    });
    $('#regist_year_tr').hide(0, function() {
      $('#regist_year').val('');
      $('#regist_month').val('');
    });
    $('#use_man_tr').hide(0, function() {
      $('input[name="use_man"]').prop('checked', false);
      $('#use_man_other').val("");
    });
  }

  $('#ownBox [name="own"]').on('click', function() {
    ownVal = $(this).val();
    if(ownVal == '1' || ownVal == '2' || ownVal == '3'){
      ownFlag = true;
      $('#maker_tr').fadeIn(1000, function() {
        $('#maker').attr('disabled', false);
      });
      $('#car_tr').fadeIn(1000, function() {
      });
      $('#car_inspection_year_tr').fadeIn(1000, function() {
      });
      $('#regist_year_tr').fadeIn(1000, function() {
      });
      $('#use_man_tr').fadeIn(1000, function() {
      });
    } else {
      ownFlag = false;
      $('#maker_tr').fadeOut(1000, function() {
        $('#maker').attr('disabled', true);
        $('#maker').val('');
        $('#maker_id_other').val('');
      });
      $('#car_tr').fadeOut(1000, function() {
        $('#car_tr').val('');
        $('#car_id_other').val('');
      });
      $('#car_inspection_year_tr').fadeOut(1000, function() {
        $('#car_inspection_year').val('');
        $('#car_inspection_month').val('');
      });
      $('#regist_year_tr').fadeOut(1000, function() {
        $('#regist_year').val('');
        $('#regist_month').val('');
      });
      $('#use_man_tr').fadeOut(1000, function() {
        $('input[name="use_man"]').prop('checked', false);
        $('#use_man_other').val("");
      });
    }
  });

  /*
  ご使用者様？の質問によって、ご使用者様その他の入力可否が変わる
  ================*/

    // var use_man = $('input[name="use_man"]').val();
    // var use_man_other_flag = true;
    // if(job_id != '99'){
    //   $('#job_id_other_tr').hide(0, function() {
    //     use_man_other_flag = false;
    //   });
    // }
    //
    // $('input[name="use_man"]').on('click', function() {
    //   use_man = $(this).val();
    //   if(use_man == '99'){
    //     $('#use_man_other_tr').fadeIn(1000, function() {
    //       use_man_other_flag = true;
    //     });
    //   } else {
    //     $('#use_man_other_tr').fadeOut(1000, function() {
    //       use_man_other_flag = false;
    //       $('#use_man_other').val("");
    //     });
    //   }
    // });

    /*
    これまでにSUBARU車の所有歴があればお聞かせください？の質問によって直近のSUBARU車の車種名の選択可否が変わる
    ================*/

      var ownershipVal = $('#ownershipBox [name="ownership"]:checked').val(),
      ownershipFlag = false;

      if(ownershipVal == '1' || ownershipVal == '2'){
        ownershipFlag = true;
      } else {
        ownershipFlag = false;

        $('#ownership_carname_tr').hide(0, function() {
          $('#ownership_carname').val("");
          $('#ownership_carname_other').val("");
        });
      }

      $('#ownershipBox [name="ownership"]').on('click', function() {
        ownVal = $(this).val();
        if(ownVal == '1' || ownVal == '2'){
          ownershipFlag = true;
          $('#ownership_carname_tr').fadeIn(1000, function() {
          });
        } else {
          ownershipFlag = false;
          $('#ownership_carname_tr').fadeOut(1000, function() {
            $('#ownership_carname').val("");
            $('#ownership_carname_other').val("");
          });
        }
      });

    /*
    ご職業？の質問によって、ご職業その他の入力可否が変わる
    ================*/

      // var ownership_carname = $('#ownership_carname').val();
      // var ownership_carname_other_flag = true;
      // if(ownership_carname != '0036'){
      //   $('#ownership_carname_other_tr').hide(0, function() {
      //     ownership_carname_other_flag = false;
      //   });
      // }
      //
      // $('#ownership_carname').on('change', function() {
      //   ownership_carname = $(this).val();
      //   if(ownership_carname == '0036'){
      //     $('#ownership_carname_other_tr').fadeIn(1000, function() {
      //       ownership_carname_other_flag = true;
      //     });
      //   } else {
      //     $('#ownership_carname_other_tr').fadeOut(1000, function() {
      //       ownership_carname_other_flag = false;
      //     });
      //   }
      // });



    /*
    どんな時にお車のご購入（買い替え）を検討されますか？？の回答によって、その他の入力可否が変わる
    ================*/

      // var change_car = $('input[name="change_car"]').val();
      // var change_car_other_flag = true;
      // if(change_car != '99'){
      //   $('#change_car_other_tr').hide(0, function() {
      //     ownership_other_flag = false;
      //   });
      // }
      //
      // $('input[name="change_car"]').on('click', function() {
      //   change_car = $(this).val();
      //   if(change_car == '99'){
      //     $('#change_car_other_tr').fadeIn(1000, function() {
      //       change_car_other_flag = true;
      //     });
      //   } else {
      //     $('#change_car_other_tr').fadeOut(1000, function() {
      //       change_car_other_flag = false;
      //       $('#change_car_other').val("");
      //     });
      //   }
      // });


    /*
    SUBARU車にご興味はありますか？の質問によってご興味のあるSUBARU車の選択可否が変わる
    ================*/

      var interest = $('input[name="interest"]:checked').val(),
      interestCarFlag = false;
      if(interest == 'y'){
        interestCarFlag = true;
      } else {
        interestCarFlag = false;

        $('#interest_car_tr').hide(0, function() {
          $('input[name="interest_car[]"]').prop('checked', false);
          $('#interest_car_other').val("");
        });

      }

      $('input[name="interest"]').on('click', function() {
        interest = $(this).val();
        if(interest == 'y'){
          interestCarFlag = true;
          $('#interest_car_tr').fadeIn(1000, function() {
          });
        } else {
          interestCarFlag = false;
          $('#interest_car_tr').fadeOut(0, function() {
            $('input[name="interest_car[]"]').prop('checked', false);
            $('#interest_car_other').val("");
          });
        }
      });



    /*
    現在お付き合いのあるSUBARU販売会社はありますか？の質問によって回答可否が変わる
    ================*/

      var has_dealer = $('input[name="has_dealer"]:checked').val(),
      has_dealerFlag = false;
      if(has_dealer == 'y'){
        has_dealerFlag = true;
      } else {
        has_dealerFlag = false;

        $('#dealer_id_tr').hide(0, function() {
          $('input[name="dealer_id"]').prop('checked', false);
          $('#dealer_id_other').val("");
        });
        $('#store_tr').hide(0, function() {
          $('#store').val("");
        });
        $('#salesman_tr').hide(0, function() {
          $('#salesman').val("");
        });
      }

      $('input[name="has_dealer"]').on('click', function() {
        has_dealer = $(this).val();
        if(has_dealer == 'y'){
          has_dealerFlag = true;
          $('#dealer_id_tr').fadeIn(1000, function() {
          });
          $('#store_tr').fadeIn(1000, function() {
          });
          $('#salesman_tr').fadeIn(1000, function() {
          });
        } else {
          has_dealerFlag = false;
          $('#dealer_id_tr').fadeOut(1000, function() {
            $('input[name="dealer_id"]').prop('checked', false);
            $('#dealer_id_other').val("");
          });
          $('#store_tr').fadeOut(1000, function() {
            $('#store').val("");
          });
          $('#salesman_tr').fadeOut(1000, function() {
            $('#salesman').val("");
          });
        }
      });


/*
バリデーション追加
================*/

  var validationFlag = false;

  function originalValidation(){
    if($('.original_validation').size() > 0){
      $('.original_validation').remove();
    }

    //誕生日のチェック
    if($('#year').val() == "" || $('#month').val() == "" || $('#day').val() == ""){
      $('#year').parent().append('<span class="errMsg original_validation">生年月日を選択してください</span>');
    }

    //ご職業その他のチェック
    if(job_id_other_flag){
      if($.trim($('#job_id_other').val()) == ""){
        $('#job_id_other').parent().append('<span class="errMsg original_validation">ご職業を入力してください</span>');
      }
    }

    var ownVal = $('#ownBox [name="own"]:checked').val();
    if(ownVal == '1' || ownVal == '2' || ownVal == '3'){
      // //車種のチェック
      // if($.trim($('#maker').val()) == ""){
      //   $('#maker').parent().append('<span class="errMsg original_validation">選択してください</span>');
      // }
      // //車種のチェック
      // if ($.trim($('#maker').val()) >= 13){
      //   // ベンツなど外国メーカーは車種は必須でない
      // }else{
      //   if($.trim($('#car_id').val()) == ""){
      //     $('#car_id').parent().append('<span class="errMsg original_validation">選択してください</span>');
      //   }
      // }
      // //次回車検時期のチェック
      // if($.trim($('#car_inspection_year').val()) == "" || $('#car_inspection_month').val() == ""){
      //   $('#car_inspection_year').parent().append('<span class="errMsg original_validation">選択してください</span>');
      // }
      // //登録年月のチェック
      // if($.trim($('#regist_year').val()) == "" || $('#regist_month').val() == ""){
      //   $('#regist_year').parent().append('<span class="errMsg original_validation">選択してください</span>');
      // }
      //ご使用者様のチェック
      if(! $("#use_man1").prop('checked') && ! $("#use_man2").prop('checked') && ! $("#use_man3").prop('checked') && ! $("#use_man99").prop('checked')){
        $('#usemanDiv').parent().append('<span class="errMsg original_validation">選択してください</span>');
      }
      //ご使用者様その他のチェック
      // if($("#use_man99").prop('checked') && $.trim($('#use_man_other').val()) == ""){
      //   $('#usemanDiv').parent().append('<span class="errMsg original_validation">入力してください</span>');
      // }
    }

    var ownershipVal = $('#ownershipBox [name="ownership"]:checked').val();
    if(ownershipVal == '1' || ownershipVal == '2'){
      //直近のSUBARU車の車種名のチェック
      // if($.trim($('#ownership_carname').val()) == ""){
      //   $('#ownership_carname').parent().append('<span class="errMsg original_validation">選択してください</span>');
      // }
      //直近のSUBARU車の車種名その他のチェック
      // if($('#ownership_carname').val() == "0036" && $.trim($('#ownership_carname_other').val()) == ""){
      //   $('#ownership_carname_Div').parent().append('<span class="errMsg original_validation">車種名を入力してください</span>');
      // }
    }

    // if(change_car_other_flag){
    //   //どんな時にお車のご購入（買い替え）を検討されますか？その他のチェック
    //   if( $("#change_car_99").prop('checked') && $.trim($('#change_car_other').val()) == ""){
    //     $('#change_car_other_tr').parent().append('<span class="errMsg original_validation">入力してください</span>');
    //   }
    // }


    // if(change_car_other_flag){
    //   //どんな時にお車のご購入（買い替え）を検討されますか？その他のチェック
    //   if( $("#change_car_99").prop('checked') && $.trim($('#change_car_other').val()) == ""){
    //     $('#change_car_other_tr').parent().append('<span class="errMsg original_validation">入力してください</span>');
    //   }
    // }

    var interest = $('input[name="interest"]:checked').val();
    if (interest == 'y'){
      // SUBARU車にご興味はありますか？で「はい」を選択した場合、車種名選択の必須チェック
      var interest_cars = $('input[name="interest_car[]"]:checked');
      if (!interest_cars || interest_cars.length == 0){
        $('#interest_car_Div').parent().append('<span class="errMsg original_validation">選択してください</span>');
      }
    }

    var has_dealer = $('input[name="has_dealer"]:checked').val();
    if (has_dealer == 'y'){
      // 現在お付き合いのあるSUBARU販売会社はありますか？で「はい」を選択した場合、販売会社名の必須チェック
      var dealer_id = $('input[name="dealer_id"]:checked').val();
      if (!dealer_id){
        $('#dealer_id_Box').parent().append('<span class="errMsg original_validation">選択してください</span>');
      }
      // if( $.trim($('#store').val()) == ""){
      //   $('#storeBox').parent().append('<span class="errMsg original_validation">営業店名を入力してください</span>');
      // }
    }

    if($('.original_validation').size() > 0){
      validationFlag = true;
    }else{
      validationFlag = false;
    }

    return validationFlag;
  }

  $('#form01').submit(function(){
    var hasError = originalValidation();

    //エラーがあるときの処理
    if(hasError || $('.original_validation').size() > 0){
      try {
        if($('.original_validation:first').offset().top < $('.formError:visible:first').offset().top){
          $('html,body').stop().animate({ scrollTop: $(".original_validation:first").offset().top-50 }, 500);
        }
      }
      catch (e) {
        $('html,body').stop().animate({ scrollTop: $(".original_validation:first").offset().top-50 }, 500);
      }
      return false;
    }
  });

  $('#year,#month,#day,#maker,#car_inspection_year,#car_inspection_month,#regist_year,#regist_month,#use_man_other,#ownership_carname,#ownership_carname_other').on('blur keyup change focus', function() {
    if(validationFlag){
      originalValidation();
    }
  });

});
