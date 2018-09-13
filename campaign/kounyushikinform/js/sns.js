$(function(){

  var createPostData = function(){

    var fd = new FormData();
    fd.append("id", $('input[name="id"]').val() || '');
    fd.append("mail", $('input[name="mail"]').val() || '');
    fd.append("ticket", $('input[name="ticket"]').val() || '');
    fd.append("fb_user_id", $('input[name="fb_user_id"]').val() || '');
    fd.append("tw_user_id", $('input[name="tw_user_id"]').val() || '');
    fd.append("ya_user_id", $('input[name="ya_user_id"]').val() || '');

    fd.append("name01", $('input[name="name01"]').val() || '');
    fd.append("name02", $('input[name="name02"]').val() || '');
    fd.append("kana01", $('input[name="kana01"]').val() || '');
    fd.append("kana02", $('input[name="kana02"]').val() || '');
    fd.append("year", $('select[name="year"]').val() || '');
    fd.append("month", $('select[name="month"]').val() || '');
    fd.append("day", $('select[name="day"]').val() || '');

    fd.append("gender", $('input[name="gender"]:checked').val() || '');
    fd.append("tel01", $('input[name="tel01"]').val() || '');
    fd.append("pos01", $('input[name="pos01"]').val() || '');
    fd.append("address01", $('select[name="address01"]').val() || '');
    fd.append("address0201", $('input[name="address0201"]').val() || '');
    fd.append("address0202", $('input[name="address0202"]').val() || '');
    fd.append("address03", $('input[name="address03"]').val() || '');
    fd.append("address04", $('input[name="address04"]').val() || '');
    fd.append("own", $('input[name="own"]:checked').val() || '');
    fd.append("maker", $('#maker').val() || '');
    // fd.append("pass01", $('input[name="pass01"]').val() || '');
    // fd.append("pass02", $('input[name="pass02"]').val() || '');
    fd.append("nickname01", $('input[name="nickname01"]').val() || '');

    fd.append("job_id", $('#job_id').val() || '');
    fd.append("job_id_other", $('#job_id_other').val() || '');
    fd.append("car_id", $('#car_id').val() || '');
    fd.append("car_id_other", $('#car_id_other').val() || '');
    fd.append("maker_id_other", $('#maker_id_other').val() || '');
    fd.append("car_inspection_year", $('#car_inspection_year').val() || '');
    fd.append("car_inspection_month", $('#car_inspection_month').val() || '');
    fd.append("regist_year", $('#regist_year').val() || '');
    fd.append("regist_month", $('#regist_month').val() || '');
    fd.append("use_man", $('input[name="use_man"]:checked').val() || '');
    fd.append("use_man_other", $('#use_man_other').val() || '');
    fd.append("ownership", $('input[name="ownership"]:checked').val() || '');
    fd.append("ownership_carname", $('#ownership_carname').val() || '');
    fd.append("ownership_carname_other", $('#ownership_carname_other').val() || '');
    fd.append("change_car", $('input[name="change_car"]:checked').val() || '');
    fd.append("change_car_other", $('#change_car_other').val() || '');
    fd.append("purchase_time", $('input[name="purchase_time"]:checked').val() || '');
    fd.append("purchase_degree", $('input[name="purchase_degree"]:checked').val() || '');
    fd.append("interest", $('input[name="interest"]:checked').val() || '');

    var interest_cars = $('input[name="interest_car[]"]:checked').map(function(){
      return $(this).val()
      // return 'area[]=' + $(this).val()
    }).get();//.join(',');
    fd.append("interest_car", interest_cars);

    fd.append("interest_car_other", $('#interest_car_other').val() || '');
    fd.append("visiting", $('input[name="visiting"]:checked').val() || '');
    fd.append("has_dealer", $('input[name="has_dealer"]:checked').val() || '');
    fd.append("dealer_id", $('input[name="dealer_id"]:checked').val() || '');
    fd.append("dealer_id_other", $('#dealer_id_other').val() || '');
    fd.append("store", $('#store').val() || '');
    fd.append("salesman", $('#salesman').val() || '');
    fd.append("permit", $('input[name="permit"]:checked').val() || '');


    var postData = {
      type : "POST",
      dataType : "text",
      data : fd,
      processData : false,
      contentType : false
    };

    return postData;
  };

  var sendFormDataAndRedirectSnsLoginUrl = function(snsLoginurlWithTicket){
    var postData = createPostData();
    $.ajax(
      '/campaign/kounyushikin/regist/setFormData', postData
    ).done(function( json ){
      var data = $.parseJSON(json);
      // console.log(data);
      location.href = snsLoginurlWithTicket;
      // if (data.success)
      // {
      //   location.href = snsLoginurlWithTicket;
      // }else{
      //
      // }
    });
  };

  $('#twitter').on('click', function() {
    sendFormDataAndRedirectSnsLoginUrl('twlogin?ticket=' + $('input[name="ticket"]').val());
    return false;
  });

  $('#facebook').on('click', function() {
    sendFormDataAndRedirectSnsLoginUrl('fblogin?ticket=' + $('input[name="ticket"]').val());
    return false;
  });

  $('#yahoo').on('click', function() {
    sendFormDataAndRedirectSnsLoginUrl('yalogin?ticket=' + $('input[name="ticket"]').val());
    return false;
  });


});
