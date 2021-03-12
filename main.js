function tinhCong()
{
    let number1 = Number(document.getElementById("num1").value)
    let number2 = Number(document.getElementById("num2").value)
    let cong = number1 + number2
    document.getElementById("addition").innerHTML="Result Addition:" + cong
}
function tinhTru()
{
    let number1 = Number(document.getElementById("num1").value)
    let number2 = Number(document.getElementById("num2").value)
    let tru = number1 - number2
    document.getElementById("subtraction").innerHTML="Result Subtraction:" + tru
}
function tinhNhan()
{
    let number1 = Number(document.getElementById("num1").value)
    let number2 = Number(document.getElementById("num2").value)
    let nhan = number1 * number2
    document.getElementById("multiplication").innerHTML="Result Multiplication:" + nhan
}
function tinhChia()
{
    let number1 = Number(document.getElementById("num1").value)
    let number2 = Number(document.getElementById("num2").value)
    let chia = number1 / number2
    document.getElementById("division").innerHTML="Result Division:" + chia
}