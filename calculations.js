$(function(event) {
  console.log('DOM is ready');

  var calculation = [];
  var number = "";
  $('.buttons').on('click',function() {
    var checkClass = $( this ).hasClass( "operator" );
    if(checkClass) {
      output("&nbsp;" + $( this ).val() + "&nbsp;");

    } else {
      output($( this ).val());
    }
    function addNumToArr() {
      calculation.push(number);
      number = "";
    }
    if($( this ).val() === '×') {
      addNumToArr();
      calculation.push('*');
    } else if($( this ).val() === '÷') {
      addNumToArr();
      calculation.push('/');
    } else if($( this ).val() === '+') {
      addNumToArr();
      calculation.push('+');
    } else if($( this ).val() === '-') {
      addNumToArr();
      calculation.push('-');
    } else {
      number += $( this ).val();
    }
    console.log(calculation);
  });

  function output(value) {
    $('#display').append(value);
  }

  $('#equals').click(function(){
    var joined = calculation.join('');
    console.log(joined);
  });

  $('#clear-button').click(function(){
    $('#display').empty();
  });



});
