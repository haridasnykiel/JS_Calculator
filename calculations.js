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
          $('#display').html("Please add a complete mathimatical operation.");
          setTimeout(function(){
            $('#display').empty();
          }, 1000);
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
    $('#display').empty();
    calculation = [];
    numbers = "";
  });

});
