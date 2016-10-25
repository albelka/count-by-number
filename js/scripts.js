var addByMultiples = function(inputNumber1, inputNumber2) {

  var total=0;

  for(var index=0; index < inputNumber1; index += inputNumber2){
    total += number2;

  }
  alert(total);
}

$(document).ready(function() {
  $("form").submit(function(event){
    var inputNumber1 = $("input#number1").val();
    var inputNumber2 = $("input#number2").val();

    addByMultiples(inputNumber1,inputNumber2);

  event.preventDefault();
  });
});
