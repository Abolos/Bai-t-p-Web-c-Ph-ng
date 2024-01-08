var x= prompt("Nhập số: ");
if (x % 2==0){
    alert('Chẵn');
}
else {
    alert('Lẻ');
}
function ham() {
    var x = document.getElementById("ip1")
    x=Number(x.value)
    if(x%2==0){
        document.getElementById("p1").innerHTML="Số chẵn";
    } else {
        document.getElementById("p1").innerHTML="Số lẻ";
    }
}


if ((x<51) || (x>99)) {

document.write("<h1>Input value is: " + x + "</h1>");

document.write("<h2>This value is not within the range 50 to 100</h2>");

}