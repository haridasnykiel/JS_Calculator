$(function(event) {
  console.log('DOM is ready');

  $('.buttons').on('click',function() {
    output($( this ).val());
  });

  function output(value) {
    $('#display').append(value);
  }

  $('#clear-button').click(function(){
    $('#display').empty();
  });

});
