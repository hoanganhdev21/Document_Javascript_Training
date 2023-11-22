// +++++
// Sự khác nhau giữa i++ và ++i:
// ++i: -> ++i tăng giá trị của i lên 1 và trả về giá trị mới đó.
// i++: -> i++ cũng tương tự nhưng giá trị trả về là giá trị ban đầu của i trước khi được tăng lên 1.

let i = 1;
let j = i++;
console.log(i, j); // => 2 , 1
let a = 1;
let b = ++a;
console.log(a, b); // => 2 , 2

// +++++
// lưu ý khi retrun function:
function total(x, y) {
  return; // undefined
  x + y;
  //   return x + y; => Viết như này mới đúng.
}

// +++++
// Cách chuyển đổi dữ liệu mới:
const str = "";
// Cách đã học ở chương trước.
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
// Cách mới
console.log(+str); // => Chuyển sang Number.
console.log(!!str); // => Chuyển đối sang boolean

// +++++
// arguments in function:
// => nó là một object nó giống như mảng nhưng không phải là mảng.
// => Nó có thể chứa nhiều phần tử có thể truy xuất bằng index và length.
// => Không thể sử dụng những phương thức của mảng như forEach, map, filter,...

function number(a, b, c) {
  //   if (!arguments.length) console.log("please insert your arguments");
  console.log(typeof arguments); // => arguments chính là a, b, c
  const args = Array.from(arguments); // => convert sang arrays
  const args2 = [...arguments]; // => spread operator convert sang arrays
  console.log(arguments);
  console.log(args2);
  return a + b + c;
}
number(1, 2, 3);

// +++++
// closure in loop:
for (let z = 1; z < 5; z++) {
  setTimeout(function () {
    console.log(z); // z = ?
  }, 1000);
}
// let:
// -> not hoisting
// let -> scope của nó sẽ thay đổi sau mỗi lần lặp.

// var:
// -> hoisting
// -> scope của var sau mỗi vòng lặp thì nó không thay đổi.

// +++++
// localStorage and sectionStorage:
// localStorage.getItem("abc")
// sessionStorage.getItem("abc")
// localStorage: -> Lưu trữ ở trên web khi chúng ta reload thì nó vẫn còn.
// sectionStorage: -> cơ bản giống localStorage chỉ có 1 cái khác đó là khi mà chúng ta đóng tab hoặc chúng ta đóng trình duyệt thì nó sẽ bị mất

// +++++
// NHỮNG TƯỜNG HỢP KHÔNG NÊN SỬ DỤNG ARROW FUNCTION:
// +++ Event handlers
const input = document.querySelector(".input");
input.addEventListener("keyup", () => {
  console.log(this.value);
});
// +++ Object
const student = {
  counter: 0,
  increment: () => {
    return ++this.counter;
  },
};
console.log(student.increment());

// +++++
// ĐỆ QUY (recursive):
// => Nó gọi lại chính nó.
function countDown(number) {
  console.log(number);
  let other = number - 1;
  if (other > 0) {
    countDown(other); // => Gọi lại chính nó.
  }
  // if (condition) stop recursive else run recursive.
}
countDown(4);
// Maximum call stack size exceded(chạy vô tận không có điều kiện dùng)
// => Khi chúng ta viết đệ quy function chúng ta phải có 1 điều kiện để dừng và 1 điều kiện để chạy

// Bài tập về đệ qui:
const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5, [9999]],
    [1, 2],
  ],
];
// [1,2,3,3,4,5,2,3,2,3,5,1,2]; => Kết quả chúng ta muốn.
// console.log(complexArr.flat(Infinity));

// a [1,2,3] b [4,5,6] -> [1,2,3,4,5,6] -> a.concat(b);
// [1,2,3].slice()

// The `flatArray` function takes an array `arr` and a depth `deep` as arguments. It recursively flattens the array to the specified depth using the `reduce` method and concatenation. If the depth is greater than 0, it checks if each element in the array is an array itself, and if so, it recursively calls the `flatArray` function with a depth that is one less than the current depth. If the depth is 0 or less, it simply returns a copy of the original array using the `slice` method. The function returns the flattened array. The `console.log` statement at the end calls the `flatArray` function with the `complexArr` array and an `Infinity` depth to flatten the array completely.
function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, val) =>
            a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val),
          []
        )
      : arr.slice();
  return result;
}
console.log(flatArray(complexArr, Infinity));
/*
[].concat([1,2,3])
[1,2,3].concat([3, 4, 5])
const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5, [9999]],
    [1, 2],
  ],
];
[1,2,3]
*/

// +++++
// Object Set:
// => Nó là object lưu trữ dữ liệu duy nhất.
const mySet = new Set();

// add() -> value có thể là number, string, boolean
mySet.add(1);
mySet.add(1);
mySet.add("evondev");

// has() -> kiểm tra value đó có ở trong mySet hay không.
mySet.has(1); // true
console.log(mySet);
console.log(mySet.size);

// Xoá
mySet.delete("evondev");

// Xoá tất cả
mySet.clear();

//
const arr = [1, 2, 3, 4, 1, 1, 1, 4, 4, 4, 5, 5, 5, 7, 9];
// -> [1,2,3,4,5,7,9]

// array to Set
/*This code creates a new Set object called `mySet2` and initializes it with the values from the `arr` array. The `Set` object is a collection of unique values, so any duplicate values in the `arr` array will be removed. The resulting `mySet2` object will contain only the unique values from the `arr` array. The `console.log` statement is used to print the `mySet2` object to the console for debugging purposes.*/
const mySet2 = new Set(arr);
console.log(mySet2);

// for of
/*This is a `for...of` loop that iterates over the values in the `mySet2` Set object and logs each value to the console with a template literal string. The loop assigns each value in the Set to the `item` variable, which is then used in the template literal string to log the value to the console.*/
for (let item of mySet2) {
  console.log(`item: ${item}`);
}

// Set to array
/*This code is creating a new array `newArr` from the `mySet2` Set object using the `Array.from()` method. The `newArr` array will contain all the unique values from the `mySet2` Set object. The code then creates an empty array `result` and uses a `for` loop to iterate over the `arr` array. For each element in the `arr` array, the code checks if it is already in the `result` array using the `includes()` method. If the element is not already in the `result` array, it is added to the `result` array using the `push()` method. Finally, the `result` array is logged to the console. This code is essentially achieving the same result as the previous code block, which is to create an array of unique values from the `arr` array.*/
const newArr = Array.from(mySet2);
console.log(newArr);
// const newArr = [...mySet2];
let result = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (!result.includes(element)) {
    result.push(element);
  }
}
console.log(result);

// +++++
// Debugger in vscode:
for (let z = 1; z < 5; z++) {
  setTimeout(function () {
    console.log(z); // z = ?
  }, 1000);
}

// +++++
// location in BOM:
// Browser Object Model: alert, prompt, confirm, window

// +++ Location
// => Trả ra cái đường dẫn.
console.log(location);
console.log(window.location);

// Sau 1s nó sẽ điều hướng tới trang web có đường dẫn này:
// setTimeout(() => {
//   location.href = "https://evon.dev";
// }, 1000);

let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.get("page"));
console.log(params.has("page"));
console.log(params.set("page", 10));
console.log(params.get("page"));
console.log(params.keys());
for (let it of params.values()) {
  console.log(it);
}
params.delete("page");

// +++ History:
console.log(window.history);
// history.back(); // quay lại trang trước đó.
// history.forward(); // tới trang kế tiếp.
// history.go();

// +++ Navigator:
// => Check người dùng sử dụng thiết bị nào để truy cập vào web.
console.log(navigator.userAgent);
/*The `deviceType` function is using the `navigator.userAgent` property to determine the type of device that the user is accessing the website from. It checks the user agent string for specific keywords that indicate whether the device is a desktop, tablet, or mobile device. If the user agent string matches any of the keywords for a tablet or mobile device, the function returns "tablet" or "mobile", respectively. Otherwise, it returns "desktop". The function is then called and the result is logged to the console.*/
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
console.log(deviceType());
