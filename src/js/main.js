$(document).on('click', '.js-menu-toggler', function () {
  $('body').toggleClass('overflow');
  $('.header').toggleClass('menu-open');
  if($('.header').hasClass('menu-open')){
    $(this).find('use').attr('xlink:href','#close');
  }else{
    $(this).find('use').attr('xlink:href','#burger');
  }
  return false;
});

function closeCombobox(evt) {
  if (!$('.combobox__dropdown').is(evt.target) && $('.combobox__dropdown').has(evt.target).length === 0) {
    $('.combobox').removeClass('is-open');
    document.removeEventListener('click', closeCombobox);
	}
}

$(document).on('click', '.combobox__button', function () {
  $(this).parent().toggleClass('is-open');
  if($(this).parent().hasClass('is-open')) {
    document.addEventListener('click', closeCombobox);
  } else {
    document.removeEventListener('click', closeCombobox);
  }
  return false;
});
