$(function() {
  var $menu = $('nav ul');

  $('#pull').click(function(e) {
    e.stopPropagation();
    $menu.addClass('expand');
    $menu.removeClass('collapse');
    $menu.slideToggle('fast');
  });

  $('.navbar ul.internal-links a').click(function(e) {
    var fontSizePx = parseFloat(
          getComputedStyle(e.target.parentElement).fontSize
        ),
        hrefOffsetTop = $($(e.target).attr('href')).offset().top;

    $menu.slideToggle('fast');
    $('html, body').animate({
      scrollTop: hrefOffsetTop - (fontSizePx * 6)
    }, 500);
  });

  $(window).resize(function() {
    var w = $(window).width();
    if (w > 320 && $menu.is(':hidden')) {
      $menu.removeAttr('style');
      $menu.addClass('collapse');
      $menu.removeClass('expand');
    }
  });

  $(window).scroll(function() {
    var x = $(this).scrollTop();   
    $('#main').css('background-position', '100% ' + parseInt(-x/3) + 'px' + ', 0%, center top');
  });
});
