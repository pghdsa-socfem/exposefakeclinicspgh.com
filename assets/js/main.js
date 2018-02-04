$(function() {
  var $introExt = $('#intro-extended'),
      $introExtToggleExpand = $('#intro-extended-toggle-expand'),
      $introExtToggleCollapse = $('#intro-extended-toggle-collapse');

  $introExtToggleExpand.click(function() {
    $introExt.slideToggle();
    $introExtToggleExpand.hide();
    $introExtToggleCollapse.show();
  });

  $introExtToggleCollapse.click(function() {
    $introExt.slideToggle();
    $introExtToggleExpand.show();
    $introExtToggleCollapse.hide();
  });

  $('#numbers-toggle').click(function() {
    $('#numbers ul.facts').slideToggle();
  });

  $('#tactics-toggle').click(function() {
    $('#tactics ul.facts').slideToggle();
  });
});
