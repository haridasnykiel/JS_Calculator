$(function(event) {
  console.log('DOM is ready');

  var calculation = [];
  var numbers = "";
  $('.buttons').on('click',function() {
    var checkClass = $( this ).hasClass( "operator" );
    if(checkClass) {
      output("&nbsp;" + $( this ).val() + "&nbsp;");

    } else {
      output($( this ).val());
    }

    if($( this ).val() === '×' || $( this ).val() === '÷' || $( this ).val() === '+' || $( this ).val() === '-' || $( this ).val() === '=') {
      if(numbers !== "") {
        calculation.push(numbers);
        numbers = "";
      }
      calculation.push($( this ).val());
    } else {
      numbers += $( this ).val();
    }

    if($( this ).val() === '=') {
      $('#display').html(calculate());
      calculation = [];
      calculation.push($('#display').html());
    }

    console.log(calculation);
  });

  function calculate() {
    var result;
    for (var index = 0; index < calculation.length; index++) {
      var totals = 0;
      switch (calculation[index]) { // the array does not change so it will do the calculation with the orginial numbers and not the new number from the previous calculation. 
        case '+':
          result = parseFloat(calculation[index-1]) + parseFloat(calculation[index+1]);
          break;
        case '×':
          result = parseFloat(calculation[index-1]) * parseFloat(calculation[index+1]);
          break;
        case '-':
          result = parseFloat(calculation[index-1]) - parseFloat(calculation[index+1]);
          break;
        case '÷':
          result = parseFloat(calculation[index-1]) / parseFloat(calculation[index+1]);
          break;

      }

    }
    return result;
  }

  function output(value) {
    $('#display').append(value);
  }

  $('#clear-button').click(function(){
    $('#display').empty();
    calculation = [];
  });



});
