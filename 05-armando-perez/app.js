$(document).ready(function() {

  $('.nav-consumer').click(function() {
    $('.consumer').toggleClass('selected');
  })

  $('.nav-mobile').click(function() {
    $('.mobile').toggleClass('selected');
  })

  $('.nav-commerce').click(function() {
    $('.commerce').toggleClass('selected');
  })

  $('.nav-enterprise').click(function() {
    $('.enterprise').toggleClass('selected');
  })
})
