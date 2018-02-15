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

      console.log(calculation);
      } else {
        try{
          var calculate = parseFloat(math.eval(calculation.join("")));
          calculate.toString();
          $('#display').html(calculate);
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
      if($( this ).val() === '.')  {
        var reg = /\d+\./g;
        var test = reg.test(numbers);
        if(!test) {
          IncrementNumbersAndDisplay(this);
        }
      } else {
        IncrementNumbersAndDisplay(this);
      }
    }
  });

  function IncrementNumbersAndDisplay(element) {
    numbers += $( element ).val();
    output($( element ).val());
  }

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
