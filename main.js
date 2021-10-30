var number1 = Number(document.getElementById("length").value)
function calculate() {
  number1 =
    Number(document.getElementById("length").value);
   
  var area = number1 * number1;
  var perimeter = 4 * number1;
  
  document.getElementById("labelArea").innerHTML= area;
  
  document.getElementById("labelPerimeter").innerHTML= perimeter;
}