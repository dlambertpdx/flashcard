$(function() {
  $(".js-clickable").click(function() {
    $(".initially-hidden").fadeToggle();
    $(".initially-showing").fadeToggle();
  });

  $(".op-clickable").click(function() {
    $(".initially-hidden").fadeToggle();
    $(".initially-showing").fadeToggle();
  });
});
