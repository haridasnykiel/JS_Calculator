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
            calculation.push('*')
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
 
    console.log(numbers);
    console.log(calculation);
  });

  // function calculate(arr, opIndex) {
  //   switch (arr[opIndex]) {
  //     case '÷':
  //       arr[opIndex - 1] / arr[opIndex + 1];
  //       break;
  //     case '×':
  //       arr[opIndex - 1] * arr[opIndex + 1];
  //       break;
  //     case '+':
  //       arr[opIndex - 1] + arr[opIndex + 1];
  //       break; 
  //     case '-':
  //       arr[opIndex - 1] - arr[opIndex + 1];
  //       break;
  //     default:
  //       calculation.push($( this ).val()); // Try using math.js for the calculations.
  //       break;
  //   }
  // }

  function output(value) {
    $('#display').append(value);
  }

  $('#clear-button').click(function(){
    $('#display').empty();
    calculation = [];
    numbers = "";
    console.log(calculation);
  });

});
