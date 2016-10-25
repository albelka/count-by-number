var addByMultiples = function(number1, number2) {

  var total=0;

  for(var index=0; index < number1; index += number2){
    total += number2;

    alert(total);
  }
}

$(document).ready(function() {
  $("form").submit(function(event){
    var inputNumber1 = parseInt($("input#number1").val());
    var inputNumber2 = parseInt($("input#number2").val());
    console.log(inputNumber1);
    if(inputNumber1 >= 0 && inputNumber2 >= 0) {
      addByMultiples(inputNumber1,inputNumber2);
      } else {
      alert("please enter two positive numbers")
      }




  event.preventDefault();
  });
});
