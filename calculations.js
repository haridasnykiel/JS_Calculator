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
      if($( this ).val() !== '=') {
        calculation.push($( this ).val());
      }

    } else {
      numbers += $( this ).val();
    }

    if($( this ).val() === '=') {
      $('#display').html(Calculate());
      calculation = [];
      calculation.push($('#display').html());
    }

    console.log(calculation);
  });

  function Calculate() {
    var result = 0;
    for (var index = 0; index < calculation.length; index++) {
      switch (calculation[index]) {
        case '+':
          result += (parseFloat(calculation[index-1]) + parseFloat(calculation[index+1]));
          // console.log(result);
          //
          // calculation.splice(0,2,String(result));
          // console.log(calculation);
          break;
        case '×':
          result += (parseFloat(calculation[index-1]) * parseFloat(calculation[index+1]));
          //calculation.splice(0,2,result);
          break;
        case '-':
          result += (parseFloat(calculation[index-1]) - parseFloat(calculation[index+1]));
          //calculation.splice(0,2,result);
          break;
        case '÷':
          result += (parseFloat(calculation[index-1]) / parseFloat(calculation[index+1]));
          //calculation.splice(0,2,result);
          break;
      }
    }
    return String(result);
  }

  function output(value) {
    $('#display').append(value);
  }

  $('#clear-button').click(function(){
    $('#display').empty();
    calculation = [];
  });

});
