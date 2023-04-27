$("body").on("click", ".select ul li.option", function (event) {
  $('body').find('ul').removeClass('active-select')
  $(this).parent().addClass('active-select')
  // $(this).closest('ul').append($(this))
  var lis =  $(this).nextAll().addBack();
  $(this).parent('ul').prepend(lis)
  $(this).addClass('dafault');
  $(this).siblings().toggle().removeClass('dafault');
});

$("body").on("click", ".popout_info > a", function (event) {
  // $('.popout_info > a').click(function() {
  $('.popout_list').slideUp(200);
  var nextPopup = $(this).parent(".popout_info").siblings('.popout_list');
  if (!($(nextPopup).is(':visible'))) {
    $(nextPopup).slideToggle(200);
  }
});

$("body").on("click", "div.find-assign-card div.print-file", function(event){
  var w = window.open($(this).attr('data-src'));
  w.print();
});

$("body").on("click", "table div.print-file", function(event){
  var w = window.open($(this).closest('td').next('td').find('div.file-url').text());
  w.print();
});

$("body").on("click", "table div.print-doc", function(event){
  var w = window.open($(this).closest('td').next('td').find('div.doc-url').text());
  w.print();
});

$("body").on("click", "div.autocomplete-input .input-field input", function(event){
  event.stopPropagation()
  $('.input-text-autocomplete').hide();
  $(this).siblings('.input-text-autocomplete').show();
});

$("body").on("click", ".input-text-autocomplete li", function(event){
  $(this).closest('.input-text-autocomplete').siblings('input').val($(this).attr('data-name'));
  $('.input-text-autocomplete').hide();
  sessionStorage.setItem('autocomplete-address', $(this).text());
});

$("body").on("click", "#wrapper", function(event){
  $('.input-text-autocomplete').hide();
  // $('input.approved-amt').val().length > 0 ? $('input.approved-amt').addClass('input-active') : $('input.approved-amt').removeClass('input-active');
});

$("body").on("click", "div.autocomplete-input .btn-find", function(event){
  let copyTxt = $(this).siblings('.input-field').find('input').val();
  $(this).closest('div.autocomplete-input').find('.field-row textarea').html(sessionStorage.getItem('autocomplete-address'))
  sessionStorage.removeItem('autocomplete-address')
});



$("body").on("click","#login-component .submit", function(event){
  $('.sign-in').addClass('hide');
  $('.header-user-info').removeClass('hide');
})

$("body").on("click",".payment-card input[type='radio']", function(event){
  $('.issue-check input[type="radio"]').prop('checked', false);
  $('.issue-check .filter-clear').addClass('disabled').prop("disabled", true);
  $('.payment-card .btn-secondary').prop("disabled", false).removeClass('disabled');
  $('.issue-check .select li').prop("disabled", true).addClass('disabled');
})

$("body").on("click",".issue-check input[type='radio']", function(event){
  $('.payment-card input[type="radio"]').prop('checked', false);
  $('.payment-card .btn-secondary').addClass('disabled').prop("disabled", true);
  $('.issue-check .filter-clear').prop("disabled", false).removeClass('disabled');
  $('#user').prop('onclick',null).off('click');
  $('.issue-check .select li').prop("disabled", false).removeClass('disabled');
})