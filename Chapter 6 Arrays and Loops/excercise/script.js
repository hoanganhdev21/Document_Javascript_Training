// 1. Đảo ngược một chuỗi. Ví dụ: "My name is evondev" -> "evondev is name My";
function reverseString(value) {
  if (!value) return null;
  // split(" ")
  // ["My", "name", "is", "evondev"]
  // const arrStr = str.split(" ");
  // const reverseStr = arrStr.split(" ").reverse().join(" ");
  // chaining methods
  return value.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is evondev"));
// [1,2,3,4,5].reverse() -> [5,4,3,2,1]

// 2. Đảo ngược một chuỗi bao gôm các kí tự. Ví dụ: "i love" -> "evol i"
function reverseWord(str) {
  if (!str) return null;
  const arrStr = str
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .reverse()
    .join(" "); // ["i", "love"]
  // ["l","o","v","e"] -> ["e", "v", "o", "l"] -> evol
  // const result = arrStr.reverse().join(" ");
  console.log(arrStr);
}
reverseWord("i love");

// 3. In hoa chữ cái đầu trong chuỗi ví dụ: "my name is evondev" -> "My Name Is Evondev"
function capitalizeWord(word = "") {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
function capitalizeStr(str) {
  if (!str) return null;
  // str.split(" ").map(item => capitalizeWord(item)).join(" ")
  const result = str
    .split(" ")
    // .map(capitalizeWord)
    .map((item) => capitalizeWord(item))
    .join(" ");
  console.log(result);
}
capitalizeStr("my name is evondev");

// ======================================================================
// 1. Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]]. Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là 0 null undefined false "" NaN
// 1. Cho 1 mảng phức tạp [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]]. Và kết quả mong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90].

const array = [
  1,
  1000,
  false,
  null,
  "evondev",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
  NaN,
];
// new Boolean
// Boolean
// built-in object
/* Filtering out all falsy values from the `array` and creating a new array `filterFalsy` that only
contains truthy values. The `Boolean()` function is used as the filter callback to convert each item
in the array to a boolean value, and only truthy values are kept in the new array. The
`console.log()` statement is then used to print the new array to the console. */
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);

const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];
// flatten array
// flat(number) -> Phương thức flat() tạo một mảng mới với tất cả các phần tử của mảng con được nối vào nó một cách đệ quy đến độ sâu đã chỉ định. Loại bỏ các cấp con của mảng [].
const result = complexArray.flat(2); // => Số cấp muốn loại bỏ.
console.log(result);

// 2. Đảo ngược số nguyên. Ví dụ 1234 -> 4321, -567 -> -765
// Math.sign(123) -> 1 nếu là số dương.
// Math.sign(-123) -> -1 nếu là số âm.
function reverseNumber(number) {
  // convert toString
  // split("") -> [value]
  // reverse()
  // join("")
  const value =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  console.log(value);
}
reverseNumber(-1234);
reverseNumber(1234);

// 4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu có số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    // 6
    if (i % 3 === 0 && i % 2 === 0) {
      console.log("FizzBuzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    }
  }
}
fizzBuzz(15);
// + - * / %(chia lấy dư)
// 6 % 2 = 3 dư 0
// 6 % 4 = 1 dư 2

// 5. Cho 1 chuỗi bất kỳ, đếm số lượng kí tự `vowels` có trong chuỗi.
// vowels là các kí tự u e o a i
// Ví dụ "evondev" -> 3
function countVowels(string) {
  let count = 0; // => variable để lưu số lượng phần tử đó vào nếu đếm được sẽ cộng thêm 1.
  const characters = "ueoai"; // variable chứa chuỗi ueoai.
  for (let c of string.toLowerCase()) {
    // => c là character.
    if (characters.includes(c)) count = count + 1;
  }
  return count;
}
console.log(countVowels("hoanganhyei")); // => 5.
// "hoanganhyei" -> h o a n g a n h y e i

// 6. Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. Viết một function trả về một mảng với các giá trị unique(duy nhất). Kết quả ở trên sẽ là [1,2,3,5,7,6];

// parameter arr
function unique(arr) {
  let result = []; // => emty array
  if (!Array.isArray(arr)) return result; // => Nếu không phải là mảng thì return luôn.
  // Boolean
  // Array.isArray(array) -> true ngược lại thì là false

  // [1,2,3,5,7,6]
  // includes() -> check xem có chưa hay chưa
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(unique([1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]));
// console.log(unique("abc"));

// 7. Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào. Ví dụ ([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]]
// ([1,2,3,4,5,6], 3) -> [[1,2,3], [4,5,6]]
// splitArray truyền vào 1 array và số nguyên đầu vào là number.
function splitArray(array, number) {
  let result = [];
  // slice(start, end)
  // [1,2,3,4,5,6]
  let index = 0;
  while (index < array.length) {
    // console.log(array.slice(index, number + index));
    result.push(array.slice(index, number + index)); 
    index = index + number;
  }
  console.log(result);
  return result;
}
splitArray([1, 2, 3, 4, 5, 6], 3);