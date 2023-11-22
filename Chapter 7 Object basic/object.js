// Object:
// => Là tập hợp các key and value.
// => Nó được sử dụng để lưu trữ các bộ sưu tập có khóa khác nhau và các thực thể phức tạp hơn. Các đối tượng có thể được tạo bằng cách sử dụng hàm tạo Object() hoặc bộ khởi tạo đối tượng/cú pháp ký tự.

// 2 CÁCH ĐỂ KHAI BÁO OBJECT:

// +++
// Object literal.
// => Được sử dụng nhiều nhất.
const objectLiteral = {};

// +++
// Object constructor.
// => Sử dụng với từ khoá new.
const objectConstructor = new Object();
const student = {
  name: "Hoàng Anh",
  age: 27,
  male: true,
  "last-name": "Nguyễn",
  hi: function () {
    console.log("Hello Hoàng Anh");
  },
};
// => Key viết bên trái dấu(:), value viết bên phải dấu(:).
// + value là những kiểu giá trị string, number, boolean, object(tức là object có thể chứa object), cũng có thể là function.
//  hi: function () {console.log("Hello Hoàng Anh");} => function sử dụng trong này không gọi là function mà gọi là method.
// => key cũng có thể được gọi là properties.
// => Trường hợp key đặc biêt như thế này last-name phải đặt trong dấu "".

// ======================================================================
// 2 CÁCH TRUY XUẤT GIÁ TRỊ CỦA OBJECT:
// 2.1 Dot notation object.key
console.log(student.name);
// student.last - name;
// 2.2 Bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);

// THAY ĐỔI GIÁ TRỊ CỦA OBJECT:
student.age = 20;
student.male = "male";
// Thêm vào object:
student.isDeveloper = true;
student["isDeveloper"] = false;
student.hello = function () {
  console.log("hello");
};
console.log(student);

// CÁCH XOÁ GIÁ TRỊ TRONG OBJECT:
delete student["last-name"]; // => Truyền key vào.

// FOR IN IN OBJECT:
for (let key in student) {
  if (key === "name") {
    console.log("hello name");
  }
  const value = student[key];
  console.log(`${key}:${value}`);
}

// ======================================================================
// PHƯƠNG THỨC TRONG OBJECT:
// +++
// Object.keys(object) -> Trả về 1 mảng chứa tất cả các keys của object.
const keys = Object.keys(student);
console.log(keys); // => ['name', 'age', 'male', 'hi', 'isDeveloper', 'hello']
console.log(keys.length); // => Độ dài keys.

// +++
// Object.values(object) -> Trả về 1 mảng chứa tất cả các giá trị của object.
const values = Object.values(student);
console.log(values); // => ['Hoàng Anh', 20, 'male', ƒ, false, ƒ].

// +++
// Object.entries(object) -> Trả về 1 mảng nested [["name", "evondev"], ["age", 20]] gồm có key và value
const entries = Object.entries(student);
console.log(entries); // =>

// +++
// Object.assign() -> sao chép tất cả các thuộc tính riêng có thể đếm được từ một hoặc nhiều đối tượng nguồn sang đối tượng đích. Nó trả về đối tượng mục tiêu đã sửa đổi.
// => Sao chép tùe object này đến object khác gộp nhiều object lại với nhau.
const a = {
  firstName: "tuan",
};
const b = {
  lastName: "tran",
};
//  cách 1
const c = Object.assign(a, b);
console.log(c);
// cách dùng spreat operator
const d = { ...a, ...b };
console.log(d);
// Đặt tên giống camelCase........

// +++
// Object.freeze(object) -> Ngăn chặn chỉnh sửa key và value của object.
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar);

// +++
// Object.seal(object) -> Cho phép chỉnh sửa key value nhưng không được thêm key value mới
const user = {
  userName: "evondev",
  school: {
    name: "Cao Thang",
    room: {
      name: "IT",
    },
  },
};
// const newUser = Object.seal(user);
// newUser.userName = "tran anh tuan";
// newUser.school.name = "hoàng anh";
// newUser.lastName = "john";
// console.log(newUser);

// Sao chép ra để sửa không ảnh hưởng đến object ban đầu.
// [...array] {...object}
// spread operator to copy object
const newUser = { ...user };
newUser.userName = "trananhtuan";
console.log(user);
console.log(newUser);

// Cách sao chép object phức tạp.
// Object.assign
// => Chỉ sao chép được 1 cấp.
console.log(newUser);
const newUser2 = Object.assign({}, user); // => {} emty object.
console.log(newUser2);

// clone nested object.
// => Sao chép được hết các cấp.
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Designer";
console.log("New User3");
console.log(newUser3);

// +++
// TỪ KHOÁ THIS TRONG OBJECT:
// this nó sẽ đề cập tới object gần nhất
const student2 = {
  name: "Hoàng Anh",
  age: 22,
  male: true,
  "last-name": "tuan",
  hi: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old !`);
    // console.log(this);
  },
  // fullname: {
  //   name: "Tran Anh Tuan",
  // },
};
student2.hi();

// +++
// optional chaining
// => Khi truy xuất tới 1 key mà không tồn tại ở trong object thì sẽ trả về là undefined.
console.log(student2.fullname); // undefined
// console.log(student2.fullname.name); // undefined.name -> Cannot read property 'name' of undefined
// VD: Check nếu có key fullname thì sẽ thực hiện việc gì đó.
if (student2.fullname) {
  if (student2.fullname.name) {
    console.log(student2.fullname.name);
  }
}
// student2.fullname?.name
// => ? tương ứng là check đièu kiện có hay không.
console.log(student2.fullname?.name);

// +++
// destructuring object
// Viết khi không sử dụng destructuring:
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
// Khi sử dụng destructuring:
// => Giúp chúng ta viết ngắn gọn rõ ràng hơn.
// syntax:
// const {key} = object.
const { name, age, male, ...rest } = student2;
// => ...rest lấy ra những cái key còn lại.
console.log(name, age, male); // => Hoàng Anh 22 true.
console.log(rest);

// +++
// NORMAL Function
function whatYourInfo(name, age, school) {
  console.log(name, age, school);
}
whatYourInfo("evondev", 27, "Cao Thang");
whatYourInfo(27, "Cao Thang", "evondev");
// => Cách này phải nhớ đúng thứ tự mới truyền vào được.

// +++
// function with object paremeter
// => Đầu vào là dùng object.
function whatYourInfo(obj) {
  console.log(obj.name, obj.age, obj.school);
}
// Khai báo object.
const newObj = {
  school: "Cao Thang",
  age: 27,
  name: "evondev",
};
whatYourInfo(newObj); // => gọi function và truyền object vào.
// => Cách này truyền key ở vị trí như thế nào cũng được không cần chính xác.

// +++
// object destructuring parameter
// Tương tự như cách ở trên nhưng thay vì viết object ra thì chúng ta viết trực tiếp { name, age, school } như thế này.
function whatYourInfo2({ name, age, school }) {
  console.log(name, age, school);
}
whatYourInfo2({
  school: "Cao Thang",
  age: 28,
  name: "Tuan",
});
