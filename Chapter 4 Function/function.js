// Function (hàm)
// => Khi chúng ta khai báo một function để thực hiện một chức năng nào đó rất nhiều thứ ở trong đó và chúng ta sẽ chia nhỏ nó ra để sử dụng đi sử dụng lại ở nhiều nơi.
// Khai báo function
// Cú pháp(Syntax): function functionName(tên của function)(parameters, parameters,..){
// Your code here
// }

// =====================================================================
// Function declaration: Function có khai báo(tức là có tên sau function)
// parameters:  tham số
// Đề bài là viết hàm tính tổng 2 số a và b
function sum(a = 0, b = 0) {
  // console.log("is it working?");
  const total = a + b;
  return total;
  // return
  // return value
  // Không có return thì kết quả của hàm trả về là undefined
}
// sum()  // => invoke function(gọi lại function)
console.log(sum(500, 1000));
// function sum(parameter = defaultValue){}
// invoke function sum(arguments) Đối số
// Lưu function vào 1 biến rồi gọi sau này

function add(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
}
// add(500, 1000);
const sum2 = add; // gán function add cho biến sum2 nhưng chưa được gọi
sum2(300, 400);
// Tham số là function

// Tính trung bình của a và b -> (a + b) / 2
// fn: function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(200, 300, sum2);
console.log(`result: ${result}`);

// =====================================================================
// Anonymous function (function expression): Tức là nó không có tên(vô danh).
// Không bị hoisting.
const logName = function () {
  console.log("your name");
};
logName();

// IIFE -> immmediately invoked function execution.
// => IIFE (Biểu thức hàm được gọi ngay lập tức) là một hàm JavaScript chạy ngay khi được xác định.
// Syntax:
// (function () {
// …
//   })();

//   (() => {
// …
//   })();

//   (async () => {
// …
//   })();

(function () {
  console.log("This is IIFE function");
})();

// ======================================================================
// Scope:
// Global scope and Function scope:
// global scope: nằm ngoài function có thể gọi nó ở bất kỳ đâu..
// function scope: nằm bên trong function chỉ hoạt động ở trong phạm vi của function.
let myName = "evondev"; // global scope
function logYourName() {
  let myName2 = myName; // function scope
  console.log(myName2);
}
logYourName();

// Từ khoá var block scope:
let message3;
var message2;
if (2 > 1) {
  // block scope nó chỉ hoạt động ở trong cái block này thôi.
  let message3 = "Hello Hoang Anh Developer!";
  message3 = "Hello Hoang Anh Developer!";
  // const message = "Hello evondev";
  // global scope
  // hoisted
  // var bị hoisting và nó sẽ tự động đưa lên trên.
  message2 = "Hello Hoàng Anh";
}
// alert(message3);

// Lexical scope:
let aNewName = "Evondev"; // global scope
function sayHello() {
  let message5 = "Hi"; // block scope
  console.log(`${message5} ${aNewName}`);
}
// sayHello();

// =====================================================================
// Closure:
// => Bao đóng là sự kết hợp của một chức năng được nhóm lại với nhau (kèm theo) với các tham chiếu đến trạng thái xung quanh của nó (môi trường từ vựng). Nói cách khác, một bao đóng cho phép bạn truy cập vào phạm vi của hàm bên ngoài từ một hàm bên trong. Trong JavaScript, các bao đóng được tạo mỗi khi một hàm được tạo, tại thời điểm tạo hàm.
// => Function con có thể truy xuất scope của function cha(tức là function con có thể truy xuất tới function cha).

// sayHello2() parent function(hàm cha)
function sayHello2() {
  let message = "Hi Hoàng Anh Developer !";
  // sayHi() inner function(hàm bên trong)
  function sayHi() {
    console.log(message);
  }
  return sayHi;
}
let hello1 = sayHello2();
hello1();

function sayHello3(message) {
  return function hiYourName(name) {
    console.log(`${message} ${name}`);
  };
  //   return hiYourName(); => thay vì return ở đây thì return thẳng luôn vào function.
}
let hello = sayHello3("Welcome to javascript");
hello("Closure");
// => Welcome to javascript Closure

function anotherFunction() {
  let otherMessage = "hello";
  function sayHi1() {
    console.log(otherMessage);
  }
  return sayHi1;
}
let callFunc = anotherFunction(); // otherMessage is no longer accessible
// => bình thường anotherFunction() khi mà function này chạy xong trả về 1 function khác là sayHi1() thì những cái variable trong block scope không còn truy suất được nữa nhưng khi chúng ta sử dụng closure thì chúng ta vẫn còn truy xuất được.
// => closure vẫn còn truy xuất được mặc dù function đã được return.
callFunc(); // hello

// ======================================================================
// Arrow function:
// => Một biểu thức hàm mũi tên là một thay thế nhỏ gọn cho một biểu thức hàm truyền thống, với một số khác biệt về ngữ nghĩa và những hạn chế có chủ ý trong cách sử dụng:
// Các hàm mũi tên không có ràng buộc riêng của chúng đối với điều này, đối số hoặc siêu và không nên được sử dụng làm phương thức.
// Hàm mũi tên không thể được sử dụng làm hàm tạo. Gọi chúng bằng new ném TypeError. Họ cũng không có quyền truy cập vào từ khóa new.target.
// Các hàm mũi tên không thể sử dụng năng suất trong phần thân của chúng và không thể được tạo dưới dạng các hàm tạo.

// Arrow function: anonymous function.
// ECMAScript
// Normal function: anonymous function
const square = function (x) {
  return x * x;
};
console.log(square(5)); // 25

// Arrow function
const square3 = () => {
  // if else
  return 1000;
};
console.log(square3());

// rút gọn khi return
const square2 = (x) => x * x;
console.log(square2());
/*
Arrow function khi xử lý nhiều dòng
const square = () => {
  handle code
  return;
}
*/

// ======================================================================
// Callback
// => Hàm gọi lại là một hàm được truyền vào một hàm khác dưới dạng đối số, sau đó hàm này được gọi bên trong hàm bên ngoài để hoàn thành một số loại quy trình hoặc hành động.
// => Là hàm (function) được truyền qua đối số khi gọi hàm khác.
// Thoả mãn hai điều kiện:
// 1. Là hàm
// 2. Được truyền qua đối số.
/**
 * The function `myFn` logs the data type of the parameter passed to it, and then passes a callback
 * function `myCallback` as an argument to `myFn`.
 * @param param - myCallback (a function)
 */
function myFn(param) {
  console.log(typeof param);
}
function myCallback() {}
myFn(myCallback);

/**
 * The function prompts the user for their name and passes it as an argument to the greeting function,
 * which displays a greeting message with the user's name.
 * @param name - a string representing the name of the user.
 */
function greeting(name) {
  alert(`Hello, ${name}`);
}
function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}
processUserInput(greeting);
