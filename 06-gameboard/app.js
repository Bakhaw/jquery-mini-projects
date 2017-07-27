$(document).ready(function() {

  $('.notification').click(function() {
    $(this).toggleClass('active');
  })

  $('.more-btn').click(function() {
    $(this).next().toggle(200)
  })

  $('.share').click(function() {
    $(this).next().toggle(200);
  })
})
