// Javascript là ngôn ngữ lập trình chạy ở phía client.
// consolog là một hàm dùng để debug, in ra kết quả.
console.log("Hello Hoàng Anh Nguyễn");

// Variables - Biến:
// => Biến dùng để lưu trữ giá trị dữ liệu để sử dụng đi sử dụng lại ở nhiều nơi để khi thay đổi chỉ cần thay đổi ở một chỗ nó sẽ thay đổi hết tất cả.
// Đặt tên biến phải có ý nghĩa, đễ hiểu, sử dụng theo camelCase (VD: hoanganh -> hoangAnh).
// Không nên đặt tiếng việt, có dấu, các ký tự đặc biệt, các từ của hệ thống
// Delcare Variables: Khai báo biến.
// const and let:
// const => là hằng số tức là sẽ không thay đổi
const number = 100;
console.log("Variable Const:", number);
// number = 200; // => gán lại giá trị cho variable number.
// => Khi đã gán giá trị rồi thì không thể thay đổi giá trị được nữa.

// Let
// => Có thể thay đổi giá trị khi đã gán.
let otherNumber = 2000;
otherNumber = "Welcome to my Javascript !"; // => Gán lại giá trị cho Variable otherNumber.
console.log("Variable Let:", otherNumber);

// Hoisting:
// => Gọi nó ra trước khi được khởi tạo thì sẽ không chạy được chương trình sẽ báo lỗi và dừng.
// => Chúng ta phải khai báo biến ở phía trên rồi mới được gọi.
const anotherNumber = true; //Boolean
let otherValue = undefined; // Undefined null
console.log(anotherNumber);

