// Số nguyên: 1 2 3 999 33 444
// Số thập phân: 3,4 5,8 -> 3.4, 5.8
console.log(5 + 7); // => 12
console.log(typeof 10); // => check data type.
const number1 = "5";
const number2 = "4.8";

// parseIn(value):
// => Hàm parseInt() phân tích cú pháp một đối số chuỗi và trả về một số nguyên của cơ số đã chỉ định (cơ số trong các hệ thống số toán học).
console.log(parseInt(number1));

// parseFloat(value):
// => Hàm parseFloat() phân tích cú pháp một chuỗi đối số và trả về một số dấu phẩy động.
console.log(parseFloat(number2));

const number3 = -10;
// Math.abs(value):
// => Phương thức tĩnh Math.abs() trả về giá trị tuyệt đối của một số.
console.log(Math.abs(-10));

// Math.floor(value):
// => Phương thức tĩnh Math.floor() luôn làm tròn xuống và trả về số nguyên lớn nhất nhỏ hơn hoặc bằng một số đã cho.
console.log(Math.floor(4.3)); // => 4

// Math.ceil(value):
// => Phương thức tĩnh Math.ceil() luôn làm tròn lên và trả về số nguyên nhỏ hơn lớn hơn hoặc bằng một số đã cho.
console.log(Math.ceil(4.5)); // => 5

// Math.round(value):
// => Phương thức tĩnh Math.round() trả về giá trị của một số được làm tròn thành số nguyên gần nhất.
console.log(Math.round(0.8)); // => 1

// toFixed():
// => Phương thức tofixed () định dạng một số sử dụng ký hiệu điểm cố định.
console.log(1 / 3); // => 0.33333
// toFixed(number) ví dụ 0.33333 -> 0.33.
// => toFixed(2)
console.log(parseFloat((1 / 3).toFixed(2)));

// Math.random():
// => Phương thức tĩnh Math.random() trả về một số dấu phẩy động, giả ngẫu nhiên lớn hơn hoặc bằng 0 và nhỏ hơn 1, với phân phối xấp xỉ đồng đều trên phạm vi đó — sau đó bạn có thể chia tỷ lệ theo phạm vi mong muốn của mình. Việc triển khai chọn hạt giống ban đầu cho thuật toán tạo số ngẫu nhiên; nó không thể được chọn hoặc đặt lại bởi người dùng.
console.log(Math.ceil(Math.random() * 10));

// Math.max():
// => Phương thức tĩnh Math.max() trả về số lớn nhất trong số các số được cung cấp dưới dạng tham số đầu vào hoặc -Infinity nếu không có tham số.
console.log(`Max: ${Math.max(1, 2, 3)}`);

// Math.min():
// => Phương thức tĩnh Math.min() trả về số nhỏ nhất trong số các số được cung cấp dưới dạng tham số đầu vào hoặc Vô cực nếu không có tham số.
console.log(`Min: ${Math.min(1, 2, 3)}`);

// Math.pow():
// => Phương thức tĩnh Math.pow() trả về giá trị của cơ số được nâng lên lũy thừa.
// Math.pow(number1, number2); Math.pow(3, 2) -> 3^2 -> 9
console.log(Math.pow(3, 2));

// Math.sign():
// => Phương thức tĩnh Math.sign() trả về 1 hoặc -1, cho biết dấu của số được truyền dưới dạng đối số. Nếu đầu vào là 0 hoặc -0, nó sẽ được trả về nguyên trạng.
console.log(Math.sign(3));
// Expected output: 1
console.log(Math.sign(-3));
// Expected output: -1
console.log(Math.sign(0));
// Expected output: 0
console.log(Math.sign("-3"));
// Expected output: -1

// ======================================================================
// isNaN(value) and Number.isNaN(value)
// isNaN(value):
// => Hàm isNaN() xác định xem một giá trị có phải là NaN khi được chuyển đổi thành một số hay không. Vì sự ép buộc bên trong hàm isNaN() có thể gây ngạc nhiên, nên bạn có thể muốn sử dụng Number.isNaN().
console.log(isNaN("this is string")); // => true
console.log(isNaN("12345")); // => true
// Number.isNaN:
// => Phương thức tĩnh Number.isNaN() xác định xem giá trị được truyền có phải là giá trị số NaN hay không và trả về false nếu đầu vào không thuộc loại Số. Đây là phiên bản mạnh mẽ hơn của hàm isNaN() ban đầu, toàn cục.
console.log(Number.isNaN("12343")); // false
console.log(Number.isNaN(NaN)); // true
