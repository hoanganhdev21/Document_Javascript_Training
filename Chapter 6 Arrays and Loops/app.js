// Arrays(mảng): => là một danh sách chứa nhiều giá trị(phần tử) ở trong đó.
// => Đối tượng Array, giống như mảng trong các ngôn ngữ lập trình khác, cho phép lưu trữ một tập hợp gồm nhiều mục dưới một tên biến duy nhất và có các thành viên để thực hiện các thao tác mảng phổ biến.ư
// => Trong JavaScript, các mảng không phải là nguyên thủy mà thay vào đó là các đối tượng Array với các đặc điểm cốt lõi sau:
// + Mảng JavaScript có thể thay đổi kích thước và có thể chứa kết hợp các loại dữ liệu khác nhau. (Khi những đặc điểm đó là không mong muốn, thay vào đó hãy sử dụng các mảng đã nhập.)

// + Mảng JavaScript không phải là mảng kết hợp và do đó, không thể truy cập các phần tử mảng bằng cách sử dụng chuỗi tùy ý làm chỉ mục mà phải được truy cập bằng cách sử dụng số nguyên không âm (hoặc dạng chuỗi tương ứng của chúng) làm chỉ mục.

// + Mảng JavaScript không có chỉ mục: phần tử đầu tiên của mảng nằm ở chỉ mục 0, phần tử thứ hai ở chỉ mục 1, v.v. — và phần tử cuối cùng ở giá trị của thuộc tính độ dài của mảng trừ đi 1.

// + Các hoạt động sao chép mảng JavaScript tạo các bản sao nông. (Tất cả các thao tác sao chép tích hợp sẵn tiêu chuẩn với bất kỳ đối tượng JavaScript nào đều tạo ra các bản sao nông, thay vì các bản sao sâu).

// VD: Trong một lớp học cố rất nhiều học sinh nếu chúng ta tạo từng biến thì sẽ rất là cực và mất nhiều thời gian => Để khắc phục điều đó chúng ta sử dụng mảng để lưu trữ dưới dạng một danh sách chứa những phần tử với nhau chứa những giá trị trong đó.

// ======================================================================
// CÁCH VIẾT BÌNH THƯỜNG NẾU KHỒNG DÙNG MẢNG:
const a = "a";
const b = "b";
const c = "c";
const d = "d";

// CÁCH TẠO MẢNG:
// => Có hai cách tạo mảng.
// Arrays literal.
// => Cách này được sử dụng nhiều nhất hiện nay.
const students1 = [
  "evondev",
  "hoàng anh",
  "thế anh",
  "thu phương",
  "trung đạt",
];
console.log(students1);

// Arrays constructor.
// => Cách này sử dụng từ khoá là new.
const syudents2 = new Array();

// Ví dụ một mảng
// Mảng phức tạp [0, false, undefined, null, "evondev", ["evondev", false, 1200, []] ]
// Mảng đơn giản [0, false, undefined, null, "evondev"]
// [1,2,3,4,5] ["a","b","c","d"] [false, true, true]
// []: empty array --> mảng rỗng
const students6 = ["evondev", "tuan", "nam", "thanh", "trung"];
// 0 1 2 3 4
// index: vị trí của phần tử(giá trị) trong mảng và nó bắt đầu từ 0
// length: độ dài của mảng, nó đếm từ 1
console.log(students1.length); // 5
// Truy xuất giá trị trong mảng qua index với cú pháp arrayName[index]
console.log(students1[0]);
console.log(students1[3]);
// Nếu không có vị trí index thì trả về undefined
console.log(students1[5]);
// lấy phần tử cuối cùng trong mảng, length của mảng - 1
console.log(students1[students1.length - 1]);
students1.length = 0;
console.log(students1);
// []: empty array, mảng rỗng

// ======================================================================
// PHƯƠNG THỨC HAY DÙNG CỦA MẢNG NÊN BIẾT:
const students3 = [
  "evondev",
  "hoàng anh",
  "thế anh",
  "thu phương",
  "trung đạt",
];
// Syntax: arrayName.method.

// +++
// length -> Trả về độ dài của mảng.
console.log("Trả về dộ dài cuat mảng:", students3.length);

// +++
// reverse() -> Đảo ngược các phần tử trong mảng mà không làm thay đổi mảng ban đầu.
console.log("Đảo ngược mảng:", students3.reverse());

// +++
// join() -> Nối các phần tử trong mảng thành chuỗi.
// => Được phân tách bởi dấu phẩy hoặc một chuỗi phân cách đã chỉ định. Nếu mảng chỉ có một mục, thì mục đó sẽ được trả về mà không sử dụng dấu tách.
console.log("Nối array thành string:", students3.join()); // => trung đạt,thu phương,thế anh,hoàng anh,evondev
// separator: "" " " "_" "-"
console.log(students3.join(" ")); // => trung đạt thu phương thế anh hoàng anh evondev

// +++
// includes() -> Kiểm tra xem phần tử đó có ở trong mảng hay không trả về true or false.
console.log("Check element in array:", students3.includes("hoàng anh")); // => true.
console.log("Check element in array:", students3.includes("hoàng anh 2")); // => false.

// +++
// indexOf() -> Trả về vị trí của phần tử được tìm thấy đầu tiên.
// => Nếu không tìm thấy sẽ trả về -1.
console.log(
  "Trả về vị trí phần tử đầu tiên được tìm thấy đầu tiên",
  students3.indexOf("evondev")
);

// +++
// lastIndexOf() -> Trả về vị trí của phần tử được tìm thấy cuối cùng.
// => Nếu khôngn tìm thấy sẽ trả về -1.
console.log(
  "Trả về vị trí phần tử đầu tiên được tìm thấy đầu tiên",
  students3.lastIndexOf("evondev")
);

// +++
// push() -> Thêm phần tử vào cuối mảng.
console.log("Thêm phần tử vào cuối mảng:", students3.push("Javascript"));
console.log(students3); // => update lại array students3.

// +++
// unshift() -> Thêm phần tử vào đâu mảng.
console.log("Thêm phần tử vào đầu mảng:", students3.unshift("Developer"));
console.log(students3); // => update lại students3.

// +++
// pop() -> Xoá phần tử cuối cùng trong mảng và trả về phần tử đó.
// => Phương thức này thay dổi độ dài của mảng.
console.log("Loại bỏ phần tử cuối cùng của mảng:", students3.pop());
console.log(students3); // => update lại array students3.

// +++
// shift() -> Xoá phần tử đầu tiên trong mảng và trả về phần tử đó.
// => Phương thức này thay đổi độ dài của mảng.
console.log("Loại bỏ phần tử đầu tiên của mảng:", students3.shift());
console.log(students3); // => update lại array students3.

// +++
// slice() -> Tạo ra một mảng copy của mảng ban đầu.
const animals = ["tiger", "lion", "horse", "elephant"];
// => slice() ->Tạo ra một mảng mới giống y hệt mảng ban đầu.
const animals2 = animals.slice();
console.log("Slice():", animals);

// slice(start) -> Start: vị trí index ở trong mảng.
const animals3 = animals.slice(1);
console.log("slice(start):", animals3);

// slice(start, end) -> start: vị trí index bắt đầu, end: vị trí index kết thúc.
// Nó sẽ sao chép từ vị trí start tới vị trí end -1.
const animals4 = animals.slice(1, 3);
console.log("slice(start, end) :", animals4);

const animals5 = animals.slice(-2);
console.log(animals5);

// +++
// splice() -> Nó sẽ xoá bỏ phần tử trong mảng hoặc thay thế phần tử trong mảng.
const pets = ["dog", "cat", "bird", "dragon"];
// splice(start)
const pets2 = pets.splice(2);
// ["bird", "dragon"];
console.log(pets2);
// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xoá hoặc thay thế
// const pets3 = pets.splice(0, 4);
// [] empty array: mảng rỗng
// splice(start, deleteCount, item1, item2, itemN): deleteCount là số lượng phần tử muốn xoá hoặc thay thế
const pets3 = pets.splice(0, 2, "dinasour", "pig", false, 100);
// ["dinasour", "cat", "bird", "dragon"];
console.log(pets);

// +++
// sort()
// => Phương thức sort() sắp xếp các phần tử của một mảng tại chỗ và trả về tham chiếu cho cùng một mảng, hiện đã được sắp xếp. Thứ tự sắp xếp mặc định tăng dần, được xây dựng dựa trên việc chuyển đổi các phần tử thành chuỗi, sau đó so sánh các chuỗi giá trị đơn vị mã UTF-16 của chúng.
// Sắp xếp các phần tử trong mảng theo chuẩn unicode-16.
const random = [1, 9999, 10000000, 5, 9];
// [1, 10000000, 5, 9, 9999]
console.log(random.sort());
// sort(function(a, b))
// function(callback)
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // Sắp xếp theo tăng dần
  if (a < b) return -1; // Sắp xếp theo giảm dần
});
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
// ternary operator: condition ? something : something else
console.log(random3);

// Sort bổ sung
// const random = [1, 9999, 10000000, 5, 09];
const random4 = random.sort((a, b) => (a > b ? -1 : 1));
console.log(random4);

// +++
// find() -> nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thoả điều kiện nào đó.
const numbers = [1, 9999, 10000000, 5, 9];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10.
const findYourNumber = numbers.find((element) => element > 10);
console.log(findYourNumber); // => 9999
// => Nếu không tìm thấy kết quả thì nó sẽ trả ra kết quả là undefined.

// +++
// findIndex() -> Phương thức findIndex() trả về chỉ mục của phần tử đầu tiên trong một mảng thỏa mãn chức năng kiểm tra được cung cấp. Nếu không có phần tử nào thỏa mãn chức năng kiểm tra, -1 được trả về.
// => Nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thoả điều kiện nào đó.
const findYourIndex = numbers.findIndex((element) => element < 0);
// Nếu không tìm thấy thì sẽ trả ra kết quả là -1
console.log(findYourIndex);

// +++
// map() -> Duyệt qua từng phần tử ở trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu.
const listNumber = [1, 2, 3, 4, 5];
// trả ra một mảng mới mà các (giá trị) trong mảng cũ nhân 2
// .map(callback(value, index, array))
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
});
// [2, 4, 6, 8, 10]
console.log(listNumberDouble);

// +++
// forEach() -> Duyệt qua từng phần tử ở trong mảng nhưng nó sẽ không trả ra một mảng mới và không hề có return.
const listNumberTripple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumberTripple);
// Chú ý câu hỏi hay phỏng vấn:
// Hãy cho biết sự khác nhau giữa forEach và map ?

// +++
// filter() -> Dùng để filter(sàng lọc) các phần tử trong mảng thoả mãn điều kiện nào đó.
// .filter(callback(value, index, array))
// const listNumber = [1, 2, 3, 4, 5];
const greaterThanThree = listNumber.filter((item) => item > 3);
console.log(greaterThanThree); // => [4,5]

// +++
// some() -> Trả về true khi thoả 1 điều kiện và ngược lại trả vê false khi không thoả điều kiện nào cả
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);

// +++
// every() -> Chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 cái sai là nó sẽ return false
const everyNumber = listNumber.every((value) => value > 3);
console.log(everyNumber);
// true or false

// +++
// reduce() -> Gom các phần tử trong mảng thành một.
// .reduce((a, b) => {}, initialize value);
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(totalNumber);

// +++
// flat(number) -> Phương thức flat() tạo một mảng mới với tất cả các phần tử của mảng con được nối vào nó một cách đệ quy đến độ sâu đã chỉ định. Loại bỏ các cấp con của mảng [].
const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];
// flatten array
// flat(number).
const result = complexArray.flat(2);
// console.log(result);

// =====================================================================
// BY VALUE VS BY REFERENCE.
// By value -> Giá trị thực sự được lưu trong vùng bộ nhớ khi mình khởi tạo biến.
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true.

// By referrences -> Chỉ nói tới vùng bộ nhớ chứ không biết nó lưu ở vùng bộ nhớ nào cả.
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false

// CÁCH SO SÁNH MẢNG NÊN BIẾT:
// JSON: Javascript Object Notation.
/*
{
  "key": value,
  "key": value,
  "key": value,
  "key": value,
}
*/
// JSON.stringify(value) -> convert giá trị sang dưới dạng JSON string.
// toString()
// [1,2,3].toString() -> "1,2,3"
// JSON.stringify([1,2,3]) -> "[1,2,3]"
// [1,2,3]
// JSON.parse("[1,2,3]") -> [1,2,3] => Phân tích cú pháp một đoạn văn bản chuỗi dưới dạng JSON, tùy chọn chuyển đổi giá trị được tạo và các thuộc tính của nó, đồng thời trả về giá trị(chuyển đổi về mảng ban đầu).
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str);

// +++
// Clone(sao chép mảng):
const students = ["a", "b", "c", "d", "e"];
// 1. sử dụng phương thức slice()
const sliceStudents = students.slice();
sliceStudents.pop(); //
console.log(sliceStudents);
// 2. spread operator [...array]
const spreadStudents = [...students];
console.log(spreadStudents);

// +++
// concat() -> Gộp mảng(gộp 2 hoặc nhiều mảng).
// [1,2] [3,4] [5,6] -> [1,2,3,4,5,6]
// 1. array1.concat(array2, array3, arrayN);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
// 2. spread operator
// [...array]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);

// destructuring array
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
// const a1 = toys[0]; // ball
// const b1 = toys[1]; // sword
// const c1 = toys[2]; // arrow
// console.log(a1, b1, c1);
// const [indexName, indexName, indexName] = toys;
const [ball, ...rest] = toys;
// console.log(ball, sword, arrrow);
console.log(rest);

// rest parameter ... : =>lấy những giá trị còn lại.
function demo(a, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4, 5);
