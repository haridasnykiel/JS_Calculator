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
      while(calculation.length > 1) {
        $('#display').html(calculate());
        calculation.splice(0,3);  
        calculation.unshift($('#display').html());
      }

      
      //calculation = [];
      
    }

    console.log(calculation);
  });

  function calculate() {
    var result;
    for (var index = 0; index < calculation.length; index++) {
      switch (calculation[index]) { 
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
      //break;
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
