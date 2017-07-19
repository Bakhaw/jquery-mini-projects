$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var password = $('#password').val();
    if (firstName == "") {
      $('.first-name-error').html('Please enter your first name')
    }
    if (lastName == "") {
      $('.last-name-error').html('Please enter your last name')
    }
    if (email == "") {
      $('.email-error').html('Please enter your email')
    }
    if (password == "") {
      $('.password-error').html('Please enter your password')
    } else if (password.length < 8) {
      $('.password-error').html('Your password should be at least 8 characters')
    }
  });

});
