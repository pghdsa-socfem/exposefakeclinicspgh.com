$(function () {
  var $pull = $('#pull'),
      $menu = $('nav ul');

  $pull.on('click', function (e) {
    $menu.slideToggle();
    $menu.addClass('expand');
    $menu.removeClass('collapse');
  });

  $(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && $menu.is(':hidden')) {
      $menu.removeAttr('style');
      $menu.addClass('collapse');
      $menu.removeClass('expand');
    }
  });

  $(window).scroll(function () {
    var x = $(this).scrollTop();   
    $('#main').css('background-position', '100% ' + parseInt(-x/3) + 'px' + ', 0%, center top');
  });
});
