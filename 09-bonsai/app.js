$(document).ready(function() {
  $('#top-text').keyup(function() {
  $('.top-caption').text($(this).val());
  })

  $('#bottom-text').keyup(function() {
  $('.bottom-caption').text($(this).val());
  })

  $('#image-url').keyup(function() {
  $('#meme').attr('src', $(this).val());
  })
})
