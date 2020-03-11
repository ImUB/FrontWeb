function numreset()
{
  document.getElementById("num1").reset();
  document.getElementById("num2").reset();
  document.getElementById("num3").reset();
}

function calc()
{
  var number1 = document.getElementById("num1").value;
  var number2 = document.getElementById("num2").value;
  var number3 = document.getElementById("num3").value;
  document.getElementById("num4").value = parseInt(number1) + parseInt(number2) + parseInt(number3);
  var price1 = parseInt(number1) * 25000;
  document.getElementById("price1").value = price1;
  var price2 = parseInt(number2) * 24000;
  document.getElementById("price2").value = price2;
  var price3 = parseInt(number3) * 28000;
  document.getElementById("price3").value = price3;
  document.getElementById("price4").value = price1 + price2 + price3;
}
