"4.5"; // parseFloat.
"4"; // parseInt.
// ======================================================================
// Hàm number:
// Number(value) -> number.
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abcdef")); // => value không phải là số thì sẽ convert sang NaN.

// NaN: Not a Number
console.log(Number(undefined)); // => NaN.
console.log(Number(null)); // => 0.
console.log(Number(false)); // => 0.
console.log(Number("")); // => 0.
console.log(Number(NaN)); // => NaN.
// falsy values
console.log(Number(true)); // => 1.

// ======================================================================
// Hàm string:
// String(value) -> string.
console.log(String(4.5)); // => "4.5".
console.log(String(null)); // => "null".
console.log(String(undefined)); // => "undefined".
console.log(String(NaN)); // => "NaN".
console.log(String(false)); // => "false".
console.log(String(true)); // => "true".

// ======================================================================
// Hàm Boolean:
// Boolean(value) -> true or false.
console.log(`Boolean of zero: ${Boolean(0)}`); // => false.
console.log(`Boolean of "": ${Boolean("")}`); // => false.
console.log(`Boolean of null: ${Boolean(null)}`); // => false.
console.log(`Boolean of undefined: ${Boolean(undefined)}`); // => false.
console.log(`Boolean of NaN: ${Boolean(NaN)}`); // => false.
console.log(`Boolean of false: ${Boolean(false)}`); // => false.
console.log(`Boolean of text tuan: ${Boolean("tuan")}`); // => true.

// ======================================================================
// type coercion
// => Ép buộc loại là chuyển đổi tự động hoặc ngầm định các giá trị từ loại dữ liệu này sang loại dữ liệu khác (chẳng hạn như chuỗi thành số). Chuyển đổi kiểu tương tự như ép buộc kiểu vì cả hai đều chuyển đổi giá trị từ kiểu dữ liệu này sang kiểu dữ liệu khác với một điểm khác biệt chính — kiểu ép buộc là ẩn trong khi chuyển đổi kiểu có thể ẩn hoặc rõ ràng.
// => Chuyển đổi dữ liệu từ kiểu này sang kiểu khác.

// + - * / ** % --
/**
 *      ( + )  ==> Cộng
 *      ( - )  ==> Trừ
 *      ( * )  ==> Nhân
 *      ( / )  ==> Chia
 *      ( % )  ==> Chia lấy dư.
 *      ( ++)  ==> Tăng 1 giá trị số.
 *      ( --)  ==> Giảm 1 giá trị số.
 *      ( **)  ==> Luỹ thừa.
 */
// => - * / thì bình thường and + có hơi đặc biệt.
// weird
console.log(1 + 2);
console.log(10 + 10);
console.log(10 + "10"); // 1010
console.log("10" + 10); // 1010
// 10 -> "10" + "10" ->  "1010"
// console.log(String(10) + "10");
console.log("10" - 10); // 0 Number("10") - 10
console.log(null + ""); // "null"
console.log(null + undefined); // NaN
console.log("0" - 1); // Number("") -> 0 -> 0 - 1 = -1
console.log(false - true); // -1
console.log(null + 10); // 10

// % => chia hết.

// ======================================================================
// Toán tử so sánh > < >= <= :
// => return true or false.
/**
 * 
 *      (!=)      ==>       Không bằng.
 *      (==)      ==>       Bằng.
 *      (>)       ==>       Lớn hơn.
 *      (<)       ==>       Nhỏ hơn.
 *      (>=)      ==>       Lớn hơn hoặc bằng.
 *      (<=)      ==>       Nhỏ hơn hoặc bằng.
 * 
 */
console.log(5 > 7); // false
console.log(50 > 7); // true
console.log(50 < 7); // false
console.log(6 >= 6); // true
console.log(6 <= 6); // true

// Toán tử logic: &&(dấu và) ||(dấu hoặc) !(dấu phủ định)
console.log(5 > 7 && 8 > 3); // false
console.log(5 > 7 || 8 > 3); // false || true -> true
const amIWrong = true;
console.log(!amIWrong); // false
// #Boolean &&
// false && true -> false
// true && false -> false
// false && false -> false
// true && true -> true
// #Boolean ||
// false || true -> true
// true || false -> true
// true || true -> true
// false || false -> false.

// ======================================================================
// Toán tử gán
/**
 * 
Toán tử            Ví dụ            Tương đương
=                  x = y            x = y
+=                 x += y           x = x + y
-=                 x -= y           x = x - y
*=                 x *= y           x = x * y      
/=                 x /= y           x = x / y
**=                x **= y          x = x ** y
*
 */

// ======================================================================
// Toán tử ++ và --
// Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1.
// Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1.
// Tổng kết:
// (+) x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng.
// (+) ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng.
// (+) x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm.
// (+) --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm.

// ======================================================================
// Toán tử nối chuỗi( string operator)
var firstName = "Hoàng Anh";
var lastName = "Nguyễn";
console.log(firstName + lastName);
// + nếu vế trái và phải của nó là số thì nó là toán tử cộng số học sẽ thực hiện phép tính tổng.
// Ngược lại 1 trong hai vế của nó là chuỗi thì nó là toán tử nối chuỗi và thực hiện nối chuỗi.

// ======================================================================
// == loose equality vs === strict equality
console.log("=== vs ==");
console.log(10 == "10"); // "10" == "10"
console.log(true == 1); // Number(true) = 1 -> 1 == 1 -> true
console.log(1 == "01"); // Number("01") -> 1 -> 1 == 1 -> true
console.log(null == ""); // "null" != "" -> false
console.log(typeof 10); // number
console.log(typeof "10"); // string
console.log(10 === "10"); // false
console.log(10 !== "10"); // true
console.log(true == "true"); // false
