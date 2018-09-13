$(function(){
  exvalidationLoad();
  var validation = $('#form01').exValidation({
    rules: {
      mail01: "chkrequiredmail chkemail",
      pass01: "passchkmin6 passchkmax50 chkhankaku"
    },
    errInsertPos: 'after',
    stepValidation: true,
    errPosition: 'fixed',
    errTipCloseBtn: false,
    errMsgPrefix : ''
  });

});