$(function(event) {
  console.log('DOM is ready');

  $('.buttons').on('click',function() {
    var checkClass = $( this ).hasClass( "operator" );
    if(checkClass) {
      output("&nbsp;" + $( this ).val() + "&nbsp;");
    } else {
      output($( this ).val());
    }
    
  });

  function output(value) {
    $('#display').append(value);
  }

  $('#clear-button').click(function(){
    $('#display').empty();
  });

});
