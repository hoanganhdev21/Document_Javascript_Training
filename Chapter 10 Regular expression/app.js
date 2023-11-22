// Regular Expression: -> Biểu thức chính quy.
// Chức năng: -> Dùng để thay thế một đoạn chữ nào đó, tìm kiếm, khai thác thông tin nào đó.
// => Biểu thức chính quy là các mẫu được sử dụng để so khớp các tổ hợp ký tự trong chuỗi. Trong JavaScript, biểu thức chính quy cũng là đối tượng. Các mẫu này được sử dụng với các phương thức exec() và test() của RegExp và với các phương thức match(), matchAll(), replace(), replaceAll(), search() và split() của String. Chương này mô tả các biểu thức chính quy JavaScript.
// +++++
// 2 cách khai báo với Regex:
const re1 = /hello/; //=> Cách 1.
const re2 = new RegExp("hello"); //=> Cách 2.
// hello world
// Method
// regex.test(value) -> trả về true or false.
console.log(re1.test("hello world hello"));

// +++++
// Anchor ^ $:
// ^ string bắt đầu với từ nào đó.
// $ string kết thúc với từ nào đó.
/hi/.test("hi"); // true
/hi$/.test("welcome to hi"); // true
/hi$/.test("welcome to hello"); // false
/^hi/.test("hi welcome to hi"); // true
/^hi/.test("welcome to hi"); // false

// +++++
// ranges []:
// [a-z]: các kí tự từ a đến z in thường
// [A-Z]: các kí tự từ A đến Z in HOA
// [0-9]: các số từ 0-9
// [a-z0-9A-Z]: các số từ 0-9 hoặc từ a -> z hoặc từ A->Z
/[a-z]/.test("aadfs"); // true
/[a-z]/.test("A"); // false
/[A-Z]/.test("Z"); // true
/[A-Z]/.test("x"); // false
/[0-9]/.test("10000"); // true
/[0-9]/.test("abc10000xyz"); // true
/[0-9]/.test("abc"); // false
/[a-zA-Z0-9]/.test("123abcAbc"); // true
/[^a-z]/.test("a"); // false => Phủ định bình thường chúng ta dùng dấu ! còn ở đây thì dùng dấu mũ [^..].

// +++++
// Meta characters:
// \d: khớp với số nó sẽ tương đương với [0-9]
/\d/.test("1234"); // true
// \D: ngược lại với \d tương đương với [^0-9]
/\D/.test("123"); // false
// \w: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9_]
/\w/.test("_"); // true
// \W: ngược lại \w nó sẽ tương đương [^a-zA-Z0-9_]
/\W/.test("_"); // false
// \s: khớp với các kí tự khoảng trắng: spaces, tab, newline
/\s/.test(" "); // true
// \S: các kí tự không phải khoảng trắng
/\S/.test(" "); // false
// \n: khớp với newline( xuống hàng )
// \t: khớp với lại tab character
// .: khớp với tất cả mọi thứ ngoại trừ newline(\n)
// [^]: khớp với tất cả mọi thứ bao gồm newline(\n)

// +++++
// Quantifiers: {n} {n,m} + ? *
// Syntax: string.match(regex) -> "abc".match(/\w/) -> return [].
// {n}: số lượng nhất định.
// {n,m}: Số lượng trong khoảng từ n tới m.
// +: Lấy 1 hoặc nhiều kí tự thoả điều kiện.
const str1 = "Welcome to 202122243564645645";
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d{4,6}/)[0]);
console.log(str1.match(/\d+/)[0]);
const str2 = "color or colour?";
// ?: có thể có hoặc không có kí tự nào đó
console.log(str2.match(/colou?r/g)); // -> ["color", "colour"].
// flag:
// g: global(lấy rất là nhiều).
// i: case insensitive(nếu bình thường thì nó sẽ phân biệt hoa thường còn nếu mà dùng thì nó không phân biệt).
// m: multipe lines(nhiều hàng).
// *: không có hoặc là nhiều.
const str3 = "123456789";
console.log(str3.match(/\d?/g)); // => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '']

// +++++
// groups ():
// => Gom nhóm.
/(\d{3})?(\w+)/.test("123"); // true

// +++++
// 7. Escaping \ / [ ] ( ) { } ? + * | . ^ $
// => Trường hợp khi chúng ta làm việc với những ký tự đặc biệt.

// +++++
// Boundaries \b \B
/\?/.test("?");
/\*/.test("*");
// \b
"my name is evondev".match(/\bevondev/g); //["evondev"]
// \B
"my name isevondev".match(/\Bevondev/g);

// +++++
// replace()
const str4 = "hello welcome hello to my hello";
console.log(str4.replace("hello", "evondev")); // evondev welcome hello to my hello
// string.replace(regex, value);
// => Thay đổi nhiều ký tự trùng nhau thành 1 chữ.
str4.replace(/hello/g, "evondev");
"welcome 1234567".match(/\d+/g);
