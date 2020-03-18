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

function order()
{
    calc();

    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var number3 = document.getElementById("num3").value;
    var title1 = document.getElementById("title1").innerText;
    var title2 = document.getElementById("title2").innerText;
    var title3 = document.getElementById("title3").innerText;

    if(number1 * number2 * number3 > 0 )
    {
      var result = confirm(title1 + " " + number1+ "개\n" +
                           title2 + " " + number2+ "개\n" +
                           title3 + " " + number3+ "개\n선택했습니다. 맞습니까?");

      if ( result == true)
      {
        alert("주문에 성공했습니다.");
      }
      else
      {
        alert("주문에 실패하셨습니다.");
      }
    }
    else
    {
      alert("도서를 아무것도 선택하지 않았습니다.");
    }
}

function allbtn()
{
  display_area.location.href = "all_books.html";
}

function n_window(url)
{
  if (url == 'login.html')
  {
    var popupX = (window.screen.width / 2) - (419 / 2);
    var popupY = (window.screen.height / 2) - (300 / 2);
    window.open(url, 'login', 'left='+ popupX +', top=' + popupY +', width=419, height=135, status=no, menubar=no, toolbar=no, resizable=no');
  }
  else if (url == 'signup.html')
  {
    var popupX = (window.screen.width / 2) - (463 / 2);
    var popupY = (window.screen.height / 2) - (286 / 2);
    window.open(url, 'signup', 'left=' + popupX + ',top=' + popupY + ',width=463, height=286, status=no, menubar=no, toolbar=no, resizable=no');
  }
}
