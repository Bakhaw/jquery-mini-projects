$(document).ready(function() {
  $('.day').click(function() {
    $(this).next().toggle(500);
  });
});
