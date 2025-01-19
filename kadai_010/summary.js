$(document).ready(function() {
  
  $('#change-color').on('click', function() {
    $('#target').css('color', 'blue');
  });


  $('#change-text').on('click', function() {
    $('#target').text('こんばんは！'); 
  });

  
  $('#fade-out').on('click', function() {
    $('#target').fadeOut('slow');
  });

  
  $('#fade-in').on('click', function() {
    $('#target').fadeIn('slow'); 
  });
});
