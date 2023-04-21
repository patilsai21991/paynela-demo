$("body").on("click", ".select ul li.option", function (event) {
  $(this).addClass('dafault');
  $('body').find('ul').removeClass('active-select')
  $(this).parent().addClass('active-select')
  // $(this).closest('.select').addClass('active-select');
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

$("body").on("click", "td a div.print-file", function(event){
  var w = window.open($(this).attr('data-src'));
  w.print();
});
