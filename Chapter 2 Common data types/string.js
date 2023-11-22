// String - Chuỗi
// => String là đoạn chữ or số nằm ở trong double quotes(ngoặc kép " "), single quote (nháy đơn ''), backticks `` (template literal)
// VD: string
"Hoàng Anh Nguyễn Developer !";
`I am frontend developer !`;

// Các phương thức trong string hay gặp nhất và cách sử dụng với biến.
const name = "Hoàng Anh";
const job = "Front-End Developer";
console.log(name);
console.log(`My Name is ${name}`); // My Name is Hoàng Anh.
console.log(`${job} of Frontend`); // Developer of Frontend.
console.log(typeof job); // => typeof check kiểu dữ liệu.

// Nối string:
const newString = "My name is Evondev and I am Frontend Developer";
const newString2 = "My name is " + name + " and I am " + job + " ";
console.log(newString2);

// Sử dụng biến trong String  với backticks(template literal)
// Nối chuỗi sử dụng dấu backticks:
// Cấu trúc: ${variables}
const newString3 = `My name is ${name} and I am ${job} !`;
console.log(newString3);

// ======================================================================
// INDEX AND LENGTH IN STRING
// length: => độ dài.
const newString4 = `My name is ${name} and I am ${job} !`;
console.log(newString4.length);
// My name is Hoàng Anh and I am Front-End Developer ! -> 0-50 -> length: 51
// index là vị trí của từng kí tự trong chuỗi,(bao gồm cả khoảng trắng)
// => index chạy từ 0 -> ...

// ======================================================================
// METHOD IN STRING:
// Các hàm hay dùng với String:
const myStr = "Frontend Developer";
console.log(myStr);

// split():
// => Phương thức split()lấy một mẫu và chia a String thành một danh sách các chuỗi con được sắp xếp theo thứ tự bằng cách tìm kiếm mẫu đó, đặt các chuỗi con này vào một arrays và trả về arrays đó.
console.log(myStr.split(" ")); // ["Frontend", "Developer"]
console.log(myStr.split("")); // ["F","r","o","t","e"]
console.log(myStr.split("/")); // ["Frontend Developer"]

// toLowerCase():
// => Phương thức toLowerCase()trả về giá trị chuỗi gọi được chuyển đổi thành chữ thường.
console.log(myStr.toLowerCase()); // => frontend developer

// toUpperCase():
// => Phương thức toLowerCase()trả về giá trị chuỗi gọi được chuyển đổi thành chữ in hoa.
console.log(myStr.toUpperCase()); // => FRONTEND DEVELOPER.

// startsWith():
// => Phương thức startedWith() xác định xem một chuỗi có bắt đầu bằng các ký tự của một chuỗi đã chỉ định hay không, trả về true hoặc false nếu phù hợp.
console.log(myStr.startsWith("Frontend")); // => True
console.log(myStr.startsWith("frontend")); // => false

// endsWith():
// => Phương thức endWith() xác định xem một chuỗi có kết thúc bằng các ký tự của một chuỗi đã chỉ định hay không, trả về true hoặc false nếu phù hợp.
console.log(myStr.endsWith("Developer")); // => true
console.log(myStr.endsWith("developer")); // => false

// includes():
// => Phương thức bao gồm () thực hiện tìm kiếm phân biệt chữ hoa chữ thường để xác định xem có thể tìm thấy một chuỗi trong một chuỗi khác hay không, trả về true hoặc false nếu thích hợp.
console.log(myStr.includes("end")); // => True.
console.log(myStr.includes("and")); // => false.

// indexOf():
// => Phương thức indexOf() của các giá trị Chuỗi tìm kiếm chuỗi này và trả về chỉ mục của lần xuất hiện đầu tiên của chuỗi con đã chỉ định. Nó nhận một vị trí bắt đầu tùy chọn và trả về lần xuất hiện đầu tiên của chuỗi con đã chỉ định tại một chỉ mục lớn hơn hoặc bằng số đã chỉ định.
console.log(myStr.indexOf("D")); // => 9.

// lastIndexOf():
// => Phương thức lastIndexOf() của các giá trị Chuỗi tìm kiếm chuỗi này và trả về chỉ mục của lần xuất hiện cuối cùng của chuỗi con đã chỉ định. Nó nhận một vị trí bắt đầu tùy chọn và trả về lần xuất hiện cuối cùng của chuỗi con đã chỉ định tại một chỉ mục nhỏ hơn hoặc bằng số đã chỉ định.
const stringNew = "Frontend Developer D";
console.log(stringNew.lastIndexOf("D")); // => 19.

// replace():
// => Phương thức thay thế () trả về một chuỗi mới với một, một số hoặc tất cả các kết quả khớp của một mẫu được thay thế bằng một thay thế. Mẫu có thể là một chuỗi hoặc một RegExp và sự thay thế có thể là một chuỗi hoặc một hàm được gọi cho mỗi trận đấu. Nếu mẫu là một chuỗi, chỉ lần xuất hiện đầu tiên sẽ được thay thế. Chuỗi ban đầu được giữ nguyên.
console.log(stringNew.replace("Hoàng Anh", "Designer"));
console.log(stringNew.repeat(5));

// slice(start, end):
// => Phương thức slice() trích xuất một phần của chuỗi và trả về nó dưới dạng một chuỗi mới mà không sửa đổi chuỗi gốc.
console.log(stringNew.slice(0, 8)); // => Frontend.
console.log(stringNew.slice(0)); // => Trường hợp không điền vào vị trí end thì sẽ lấy hết: => Frontend Developer D
console.log(stringNew.slice(-5)); // => lấy ngược từ dưới lên dựa vào số âm tính từ -1 -> .... : => per D
console.log(stringNew.slice(9999)); // => không ra kết quả gì cả

// trim():
// => Phương thức trim() loại bỏ khoảng trắng ở cả hai đầu của chuỗi và trả về một chuỗi mới mà không sửa đổi chuỗi ban đầu.
const trimNew = "    Frontend Developer D    ";
console.log(trimNew.trim()); // => Loại bỏ khảng trắng cả hai đầu
// => Để trả về một chuỗi mới với khoảng trắng được cắt chỉ từ một đầu, hãy sử dụng trimStart() hoặc trimEnd().
console.log(trimNew.trimStart());
console.log(trimNew.trimEnd());

// charAt():
// => Phương thức charAt() của các giá trị Chuỗi trả về một chuỗi mới bao gồm đơn vị mã UTF-16 duy nhất nằm ở phần bù được chỉ định trong chuỗi.
const strNew2 = "Frontend";
console.log(strNew2.charAt(1));

// substr and substring:
// substr():
// => Phương thức substr() trả về một phần của chuỗi, bắt đầu từ chỉ mục đã chỉ định và mở rộng cho một số ký tự nhất định sau đó.
// substr(index, length): => index: vị trí; length: số lượng ký tự muốn lấy.
console.log(strNew2.substr(0, 5)); // => Front.

// substring():
// => Phương thức substring() trả về một phần của chuỗi từ chỉ mục bắt đầu cho đến và không bao gồm chỉ mục kết thúc hoặc đến cuối chuỗi nếu không có chỉ mục kết thúc nào được cung cấp.
// substring(start index, end index)
console.log(strNew2.substring(1, 5)); // => ront.

// VD: Loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, thay chữ `Developer D` thành chữ `Developer and Designer`, sau đó repeat 2 lần;
const myString = "   Frontend Developer D    ";
console.log(
  `Result myString: ${myString
    .trim()
    .replace("Developer D", "Developer and Designer")
    .repeat(2)
    .toUpperCase()}`
);
