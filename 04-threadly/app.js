$(document).ready(function() {
  $('button').click(function(event) {
    event.preventDefault();
    $('.comments').prepend('<li>' + $("input").val() + '</li>');
  })
})
