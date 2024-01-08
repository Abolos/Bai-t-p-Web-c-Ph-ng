// Hàm thông báo chuỗi alert ('') để truyền vào một chuoi
alert('Hi javascript basic!')
/**Khi mở trình duyệt vào kiển tra và vào console để
 *kiểm tra code mà mình đã viêt*/
// Khai báo biến
var fullName = 'Tran The Quan';
var age = 19;
alert (fullName);
/*
Giới thiệu một số hàm built-5in
    1. Alert 
    2. Console
    3. confirm
    4. Prompt
    5. Set timeout
    6. Set interval
 */
console.log('Tran The Quan') // in ra thông báo ở phần kiểm tra của console
console.warn('Khong code lung tung') // in ta canh bao mau vang o muc console

confirm('Ban da du 18 tuoi chua') //Thong bao sac nhan
prompt ('How old are you')// Hiện ra thông báo với dùng lệnh và một ô input

setTimeout (function() {
     alert('Learning! Don\'t speak');
},2000) //Chuyen vao 1 chuc nang vd như thông báo sau bao nhiêu day là hiện, 2000 la so ms hien thi.Chạy đúng 1 lần

/*
setInterval (function() {
    console.warn('Get out of here!' + Math.random());
},2000) //Cứ sau một khoản thời gian thì lại lặp lại câu lệnh trong{}
*/
/*
 *  Toán tử trong Javascript
    1. Toán tử số học - arithmaetic
    Toán tử đều giống chỉ khacs là lũy thừa là ** ví dụ a^b=a**b
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử logic - logical
    Tương Tự như lap trịnh C

 */

var a = 1 + 2;
console.log (a);
// Toán tư gan dung =
// Toán tư so sánh
var x =1 ;
var y=2;
if (x<y) {
    alert ('Dung')
}
var fistName= 'Quan';
var lastName= 'Tran';
console.log(fistName + ' ' + lastName);
if (x==y){
    console.log('x bang y');
}
else if (x<y){
    console.log('x nho hon y');
}
else {
    console.log('x lon hon y');
}
if (fistName == lastName){
    console.log('Hai chuoi giong nhau');
}
else {
    console.log('Hai chuoi khach nha');
}
/*
  Kiêu Dữ Liệu Boolean đúng hoặc sai
 */
/*
Những giá trinh 0  false '' "" undefined NaN null 
Thì đều tương đương với false còn lain là true
 */
var isSuccess = x>y;
console.log(isSuccess);
/**
 * Toán tử logic
 * 1.&& and
 * 2.|| or
 * 3. ! Not  cú pháp như sau !()
 */

/*
  1. Kiểu dữ liệu nguyên thủy
  - Number
  - String
  - Boolean
  - Underfined khai báo nhưng không gán giá trị
  - Null có nghĩa là không có gì
  - Symbol tức là id và chỉ được dùng một lần, cú pháp 
  var id = Symbol('id');

  2. Dữ liệu phức tạp
  - Function tạo ra hàm liêu vào bộ nhớ, là phương thức và thuộc tính
  - Object   

 */
var myFunction = function(){
    alert('My name is Quan');
}
// Cu phap goi ham
// myFunction();

// object types

var myObject = {
    name: 'Tran Quan',
    age: 18,
    adress:'Ha Noi'
}
// in ra 
console.log('myObject:',myObject);

var myArray = [
    'PHP',
    'Javascript',
    'Python'
];
console.log(myArray);

// Cách kiểm tra dữ liệu của một biến bất kì\
console.log(typeof myArray);