$(function(event) {
  console.log('DOM is ready');

  var calculation = [];
  $('.buttons').on('click',function() {
    var checkClass = $( this ).hasClass( "operator" );
    if(checkClass) {
      output("&nbsp;" + $( this ).val() + "&nbsp;");

    } else {
      output($( this ).val());
    }
   
    if($( this ).val() === '×' || $( this ).val() === '÷' || $( this ).val() === '+' || $( this ).val() === '-') {
      var allNums = calculation.join('');
      calculation.push(allNums);
      calculation.push($( this ).val());
    } else {
      calculation.push($( this ).val());
    }

    if($( this ).val() === '=') {
      $('#display').html(calculate());
    }
    console.log(calculation);
  });

  function calculate() {
    var result;
    for (let index = 0; index < calculation.length; index++) {
      var totals = 0;
      switch (calculation[index]) {
        case '+':
          result = calculation[index-1] + calculation[index+1]
          break;
        case '×':
          result = calculation[index-1] * calculation[index+1]
          break;
        case '-':
          result = calculation[index-1] - calculation[index+1]
          break; 
        case '÷':
          result = calculation[index-1] / calculation[index+1]
          break;  

      }
      
    }
    return result
  }

  function output(value) {
    $('#display').append(value);
  }

  $('#clear-button').click(function(){
    $('#display').empty();
    calculation = [];
  });



});
