$(document).on('click', '.js-menu-toggler', function () {
  $('body').toggleClass('overflow');
  $(this).toggleClass('is-active');
  if($(this).hasClass('is-active')){
    $(this).find('use').attr('xlink:href','#close');
  }else{
    $(this).find('use').attr('xlink:href','#burger');
  }
  $('.header').toggleClass('menu-open');
  return false;
});
