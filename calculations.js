$(function(event) {
  var calculation = [];
  var numbers = "";

  $('.buttons').on('click',function() {
    var checkClass = $( this ).hasClass( "operator" );
    if(checkClass) {
      output("&nbsp;" + $( this ).val() + "&nbsp;");
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
            calculation.push('*');
            break;
          default:
            calculation.push($( this ).val()); // Try using math.js for the calculations.
            break;
        }

      } else {
        try{
          $('#display').html(math.eval(calculation.join("")));
        }
        catch(SyntaxError) {
          clearDisplay();
        }
        calculation = [];
        if($('#display').html() !== 0) {
          numbers = ($('#display').html());
        }
      }
    } else {
      numbers += $( this ).val();
      output($( this ).val());
    }
  });

  function output(value) {
    $('#display').append(value);
  }

  $('#clear-button').click(function(){
    clearDisplay();
  });
  
  function clearDisplay() {
    $('#display').empty();
    calculation = [];
    numbers = "";
  }



});
