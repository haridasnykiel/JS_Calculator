$(function(event) {
/*jslint evil: true */
  var calculation = [];
  var numbers = "";

  $('.buttons').on('click',function() {
    var checkClass = $( this ).hasClass( "operator" );
    if(checkClass) {
      output("&nbsp;" + $( this ).val() + "&nbsp;");
    } else {
      numbers += $( this ).val();
      output($( this ).val());
    }

    if($( this ).val() === '×' || $( this ).val() === '÷' || $( this ).val() === '+' || $( this ).val() === '-' || $( this ).val() === '=') {
      if(numbers !== "") {
        calculation.push(numbers);
        numbers = "";
      }

      if($( this ).val() !== '=') {
        switch ($( this ).val()) {
          case '÷':
            calculation.push('/');
            break;
          case '×':
            calculation.push('*')
            break;
          default:
            calculation.push($( this ).val()); // Try using math.js for the calculations.
            break;
        }
        
      } else {
        try {
          $('#display').html(eval(calculation.join("")));
        }
        catch(SyntaxError) {
          $('#display').html(0);
        }
        calculation = [];
        if($('#display').html() !== 0) {
          numbers = ($('#display').html());
        }
        

      }
    }
    
    console.log(numbers);
    console.log(calculation);
  });

  function output(value) {
    $('#display').append(value);
  }

  $('#clear-button').click(function(){
    $('#display').empty();
    calculation = [];
  });

});
