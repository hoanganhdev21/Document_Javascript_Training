// ES6
// Ôn lại kiến thức về prototype and constructor function
// Constructor/protype way
/**
 * The function creates a Person object with a name property and a method to log the name to the
 * console.
 * @param name - The name of the person being created as an instance of the Person class. In this case,
 * the name is "Nguyễn Hoàng Anh".
 */
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getName = function () {
//   console.log(this.name);
// }
// const evondev = new Person("Nguyễn Hoàng Anh", "20");
// evondev.getName();

// Class:
// => chữ cái đàu in hoa.
// syntax:
class Person2 {
  // constructor
  constructor(name) {
    this.name = name;
  }
  // prototype
  // Get: -> Lấy một thông tin gì đó.
  //   getName() {
  //     return this.name;
  //   }
  // Set: -> Thay đổi giá trị gì đó
  // newName: là một argument(giá trị mới) cần đưa vào để thay đổi giá trị this.name
  //   setName(newName) {
  //     this.name = newName;
  //   }

  //   getter and setter ở trong ES6 hỗ trợ:
  //   _name: ghi như này để tránh xung đột với cái name của get and set.
  get name() {
    return this._name;
  }
  set name(newName) {
    return (this._name = newName);
  }
}

const anh = new Person2("Hoàng Anh Nguyễn");
// console.log(anh.getName());
// anh.setName("Nguyễn Hoàng Anh"); // => Set lại name.
// console.log(anh.getName()); // => Cập nhật lại get.

// Truy xuất get and set trong ES6:
console.log(anh.name);
// => Khi mà chúng ta sử dụng anh.name thì nó sẽ tìm đến cái phương thức là name và nó sẽ bind đến giá trị là name nó sẽ hiểu là get và lấy
// => Tương tự get cũng vậy
anh.name = "Nguyễn Hoàng Anh Monitor !"; // => set lại giá trị name.
console.log(anh.name);

// +++++
// Class expression
// Nó không bị hoisting nên cần phải khai báo trước khi mà khở tạo ở dưới.
let Student = class {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
};
const evon = new Student("Evondev");
console.log(evon.name);

// first class:
// => chúng ta có thể sử dụng class truyền vào function
// -> chúng ta truyền class vào function dưới dạng parameter
/**
 * The function "company" creates a new instance of a given class.
 * @param aClass - The parameter `aClass` is a reference to a class in JavaScript. It is used as an
 * argument to the `company` function, which creates a new instance of the class and returns it.
 * @returns The function `company` returns a new instance of the class passed as its argument `aClass`.
 */
function company(aClass) {
  return new aClass();
}

/* This code is creating a new instance of a class using the `company` function. The `company` function
takes a class as an argument and returns a new instance of that class. In this case, the class being
passed as an argument is an anonymous class with a `sayHello` method that logs a message to the
console. The returned instance is then assigned to the variable `hello`, and the `sayHello` method
is called on that instance, resulting in the message "Hello Hoàng Anh Nguyễn" being logged to the
console. */
let hello = company(
  class {
    sayHello() {
      console.log("Hello Hoàng Anh Nguyễn");
    }
  }
);
hello.sayHello();

// +++++
// Static method
// => Không cần phải dùng từ khoá new
// -> Tức là cái Static method không bị phụ thuộc vào bất kỳ object nào nó sẽ gọi trực tiếp vào class luôn.
// Tóm lại: -> Dùng để thực hiện 1 chức năng nào đó từ class luôn mà không phải thông qua từ khoá new tức là không phải thông qua 1 object nào cả
/* The Article class has a constructor that takes in a title and date, and a static method compare that
compares two Article objects based on their dates. */
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(a, b) {
    return a.date - b.date;
  }
}
/* The code is creating an array of Article objects with different titles and dates. These objects will
be used to demonstrate the static method `compare` in the Article class. */
let articles = [
  new Article("HTML", new Date(2021, 1, 1)),
  new Article("CSS", new Date(2021, 0, 1)),
  new Article("JS", new Date(2021, 11, 1)),
];
// const b = new Article("JS", new Date(2021, 11, 1)),
// b.compare
// articles.sort((a, b) => a.date - b.date); => sẽ tương ứng với đoạn static compare(a, b) {return a.date - b.date;}
// className.methodName
/* The code is sorting an array of Article objects based on their dates using the static method
`compare` in the Article class. The `sort` method takes a comparison function as an argument, which
in this case is the static method `compare` in the Article class. After sorting the array, the code
logs the title of the first article in the sorted array to the console. */
articles.sort(Article.compare);
console.log(articles[0].title);
// const a = new Article
// a.compare

// +++++
// Static properties
// => Truy xuất từ chính class name.
/* The class "Item" keeps track of the number of instances created using a static property and method. */
class Item {
  constructor(name) {
    this.name = name;
    this.constructor.count++;
    // this.constructor.propertyName
  }
  static count = 0;
  static getCount() {
    // className.propertyName
    return Item.count;
  }
}
/* The code is creating two instances of the `Item` class, one with the name "Pencil" and the other
with the name "Laptop". The `Item` class keeps track of the number of instances created using a
static property `count` and a static method `getCount()`. The `console.log()` statement logs the
value of `Item.getCount()`, which returns the total number of instances created, to the console. */
const pencil = new Item("Pencil");
const laptop = new Item("Laptop");
console.log(Item.getCount());

// +++++
// Super and extends
// =>
/* The class Animal has a constructor that takes in a number of legs and a method walking that logs a
message about walking on those legs. */
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walking() {
    console.log(`walking on ${this.legs} legs`);
  }
}

/* The Bird class extends the Animal class and adds a fly method to indicate that birds can fly. */
// kế thừa từ class trên.
class Bird extends Animal {
  constructor(legs) {
    super(legs); // => this.legs = legs;
  }
  fly() {
    console.log("I can flying");
  }
}

/* The code is creating a new instance of the `Bird` class with 2 legs and assigning it to the variable
`bird`. Then, it calls the `fly()` method on the `bird` instance, which logs a message to the
console indicating that the bird can fly. Finally, it calls the `walking()` method on the `bird`
instance, which logs a message to the console indicating that the bird is walking on 2 legs. */
let bird = new Bird(2);
console.log(bird.fly());
console.log(bird.walking());
