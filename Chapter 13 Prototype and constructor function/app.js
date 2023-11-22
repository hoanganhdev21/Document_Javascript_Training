// Declaration, new, this, method, caution
let student = {
  name: "evondev",
  age: 28,
};
// let student2 = {
//   name: "john",
//   age: 40
// }

// +++++
// constructor function:
// => Tạo ra nhiều đối tượng mà không cần phải khai báo.
// Constructor function Person Student
// => Thường bắt đầu bằng chữ cái ddaauf tiên in hoa(Person Student ).
// => Sử dụng từ khoá new để tạo ra object mới.
function Student(name, age) {
  // this = {} => emty object
  // add properties to this
  this.name = name;
  this.age = age;

  //   method
  // return this
  this.getName = function () {
    return `your name is ${this.name}`;
  };
}
let student2 = new Student("john", 40);
// => new nó sẽ tạo ra 1 emty {} object sau đó nó sẽ gán (this.name = name; and this.age = age;) lúc này this chính là cái emty object
// => Sau này mình muốn tạo thêm nhiều nữa thì chỉ sử dụng new chứ không cần phải khai báo nhiều object như trên.
// let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
console.log(student2.getName());

// caution(lưu ý):
// => Khi chúng ta sử dụng constructor function thì chúng ta phải sử dụng từ khoá là new

// +++++
// Prototype: Kế thừa.
// String, Number, Boolean
// => prototype của một object chính là cha của nó.
// String.prototype, Number.prototype
// => Khi chúng ta dùng prototype để kế thừa thì chúng ta có thể sử dụng những phương thức từ cha của nó
/* This code is creating a string variable `str` with the value "abc", and then calling the
`toUpperCase()` method on it. The `toUpperCase()` method is a built-in method of the `String` object
in JavaScript, which returns a new string with all the characters converted to uppercase. In this
case, the output of the `console.log()` statement will be "ABC". */
let str = "abc";
console.log(str.toUpperCase());

/* This code is adding a new method called `duplicate` to the `String` prototype. The `duplicate`
method returns the original string concatenated with itself. The `console.log(str.duplicate())`
statement is calling the `duplicate` method on the `str` variable, which is a string with the value
"abc". The output of this statement will be "abcabc". */
String.prototype.duplicate = function () {
  return this + this;
};
console.log(str.duplicate());

/**
 * The function defines a constructor for a "Girl" object with a "cook" method.
 */
function Girl() {
  this.cook = function () {
    console.log("your girlfriend can cook");
  };
}

/* Adding a new method called `sing` to the `Girl` prototype. This means that any object created using
the `Girl` constructor function will have access to this method. The `sing` method simply logs the
message "your girlfriend can sing" to the console. */
Girl.prototype.sing = function () {
  console.log("your girlfriend can sing");
};

// Trong js Object.prototype: là lớn nhất.
/* This code is adding a new method called `makeSandwich` to the `Object` prototype. This means that
any object created using the `Object` constructor function or any of its derived constructor
functions will have access to this method. The `makeSandwich` method simply logs the message "make
sandwich" to the console. */
Object.prototype.makeSandwich = function () {
  console.log("make sandwich");
};
let jane = new Girl();
jane.cook();
jane.sing();
jane.makeSandwich();

// +++++
// Bind-Call-Apply:
// +++ Bind:
// => Phương thức bind() tạo một hàm mới, khi được gọi, từ khóa this của nó được đặt thành giá trị được cung cấp, với một chuỗi đối số nhất định trước bất kỳ đối số nào được cung cấp khi hàm mới được gọi.
// => Dùng để bind cái giá trị của biến students và this của nó.

// object students
/* Creating an object `students` with two properties `firstName` and `lastName`, and a method
`fullName` that logs the full name of the student by accessing the `firstName` and `lastName`
properties using `this` keyword. */
const students = {
  firstName: "Nguyễn",
  lastName: "Hoàng Anh",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

// $
// $: -> Cách viết rút gọn document.querySelector giống như jquery:
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const button = $(".button");

const button = document.querySelector(".button");
button.addEventListener("click", students.fullName.bind(students));
console.log(button, ".button");

// => Bind() không chỉ bind được giá trị this mà bind còn bind được các tham số truyền vào cho function
// partial function: -> Tạo ra 1 function mới từ function cũ bằng cách gán mặc định một số tham số cho function cũ đó.
function log(level, time, message) {
  console.log(`${level} ${time} ${message}`);
}

/**
 * The function logs an error message with the current date.
 * @param message - The message parameter is a string that represents the error message that needs to
 * be logged. In this case, the message being logged is "Server OK!".
 */
// function logErrToday(message) {
//   log("Error", "Today", message);
// }
// logErrToday("Server OK!");

/* This code is creating a new function `logErrToday` by binding the `log` function with the first two
arguments set to `"Error"` and `"Today"`. The `null` argument is used to set the `this` value to the
global object. When `logErrToday` is called with the argument `"Server OK!"`, it will log the
message `"Error Today Server OK!"`. This is an example of partial function application, where a new
function is created by fixing some of the arguments of an existing function. */
const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server OK!");

// +++ Call and Apply:
// => Sử dụng trong function.
// Khác với bind(): -> Nó gọi hàm trực tiếp(khi gọi nó sẽ chạy luôn).
/* Creating an object `person` with two properties `firstName` and `lastName`. */
const person = {
  firstName: "Hoàng Anh",
  lastName: "Frontend developer",
};

/**
 * The function logs a string that includes two input strings and the values of `firstName` and
 * `lastName` properties of an object.
 * @param str1 - The first string argument that will be logged to the console.
 * @param str2 - The second string parameter that will be used in the console.log statement.
 */
function sayHello(str1, str2) {
  console.log(`${str1} ${str2} ${this.firstName} ${this.lastName}`);
}

// call:
// => Phương thức call() gọi hàm với giá trị this đã cho và các đối số được cung cấp riêng lẻ.
// function.call(this, arg1, arg2,....)
// -> this chính là person.
// arg1 -> argument.
// "hello" -> str1.
// "good morning" -> str2.
sayHello.call(person, "hello", "good morning");

// apply:
// => Phương thức apply() gọi hàm đã chỉ định với giá trị this đã cho và các đối số được cung cấp dưới dạng một mảng (hoặc một đối tượng giống như mảng).
// function.apply(this, [arg1, arg2,....])
// argument sẽ dưới dạng mảng[arg1, arg2,....]
// -> this chính là person.
// "hello" -> str1.
// "good morning" -> str2.
sayHello.apply(person, ["hi", "good evening"]);

/* This code is creating two arrays `arr` and `arr2` with values `[1, 2, 3]` and `[2, 3, 4]`
respectively. The `push` method is then called on the `arr` array with the `apply` method to add the
elements of `arr2` to `arr`. The `apply` method is used to pass the elements of `arr2` as individual
arguments to the `push` method. Finally, the `console.log` statement logs the updated `arr` array
with values `[1, 2, 3, 2, 3, 4]`. */
const arr = [1, 2, 3];
const arr2 = [2, 3, 4];
arr.push.apply(arr, arr2);
console.log(arr);


