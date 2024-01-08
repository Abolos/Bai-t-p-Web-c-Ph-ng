var x = Math.round(Math.random());// Tạo ra một số bất kì 0 hoặc 1
document.write ("<p>Gia tri cua x la " + x + "</p>");
var KT = prompt("Nhâp một trong hai số bất kì là 0 và 1 ");
while (KT!=x){
    var KT = prompt("Nhâp một trong hai số bất kì là 0 và 1 ");
}
document.write("Ban da nhap dung");

// // Tạo biến x có giá trị ngẫu nhiên từ 0 đến 10
// var Y = Math.floor(Math.random() * 11);
// var KQ = prompt("Nhâp một trong hai số bất kì là 0 và 10 ");

// // In giá trị của x ra màn hình
// while (KQ!=Y){
//     var KQ = prompt("Nhâp một trong hai số bất kì là 0 và 10 ");
// }
// document.write("Ban da nhap dung");