$(document).ready(function() {
  $('.cloche').click(function() {
    $('.notification-menu').toggle(300);
  });


  $('.btn').click(function() {
    $(this).toggleClass('btn-like')
  });
});
