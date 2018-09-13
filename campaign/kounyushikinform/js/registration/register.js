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
      ownBox: "carchkradio",
      pass01Box: "chkgroup passchkmin6 passchkmax50 chkhankaku",
      pass02: "passchkmin6 passchkmax50 chkhankaku passchkretype-pass01",
      messageBox: "chkgroup messagechkcheckbox"
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
お車を所有していますか？の質問によってお持ちの車の選択可否が変わる
================*/

  var ownVal = $('#ownBox [name="own"]:selected').val(),
  ownFlag = false;

  if(ownVal == 'yes'){
    $('#maker').attr('disabled', false);
    ownFlag = true;
  } else {
    $('#maker_tr').hide(0, function() {
      $('#maker').attr('disabled', true);
      $('#maker').val('');
      ownFlag = false;
    });
  }

  $('#ownBox [name="own"]').on('click', function() {
    ownVal = $(this).val();
    if(ownVal == 'yes'){
      $('#maker_tr').fadeIn(1000, function() {
        $('#maker').attr('disabled', false);
        ownFlag = true;
      });
    } else {
      $('#maker_tr').fadeOut(1000, function() {
        $('#maker').attr('disabled', true);
        $('#maker').val('');
        ownFlag = false;
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

    //車種のチェック
    if(ownFlag){
      if($('#maker').val() == ""){
        $('#maker').parent().append('<span class="errMsg original_validation">選択してください</span>');
      }
    }

    if($('.original_validation').size() > 0){
      validationFlag = true;
    }else{
      validationFlag = false;
    }
  }

  $('#form01').submit(function(){
    originalValidation();

    //エラーがあるときの処理
    if($('.original_validation').size() > 0){
      if($('.original_validation:first').offset().top < $('.formError:visible:first').offset().top){
        $('html,body').stop().animate({ scrollTop: $(".original_validation:first").offset().top-50 }, 500);
      }
      return false;
    }
  });

  $('#year,#month,#day,#maker').on('blur keyup change focus', function() {
    if(validationFlag){
      originalValidation();
    }
  });

});