// 1. Sự kiện là gì ? (event)
// => Những cái chúng ta sử dụng chuột hay bàn phím mà tương tác lên DOM.
// 2. Thêm 1 sự kiện: selector.addEventListener("eventName", handler, [options])
// click, keydown, keypress, keyup, mouseover, mousemove, mouseleave, load, DOMContentLoaded,...
// handler: function
// capture, bubbling

// ======================================================================
// KIẾN THỨC LIÊN QUAN ĐẾN SỰ KIỆN CLICK
// Syntax: addEventListener.
const button = document.querySelector(".button");
// console.log(button);

// CÁCH VIẾT KHI DÙNG DUNCTION Ở BÊN TRONG:
// button.addEventListener("click", function () {
//   console.log("Click");
// });

// CÁCH VIẾT KHI GỌI TỪ FUNCTION BÊN NGOÀI VÀO:
// => Chúng ta sẽ sử lý các chức năng ở bên trong function rồi gọi function đó vào.
function handleButton() {
  console.log("Click me !");
}
// Lỗi sai khi dùng function vào addeventListener.
// Cách viết sai:
// button.addEventListener("click", handleButton()); => handleClick() nếu để như này thì khi chúng ta chưa click thì nó đã chạy rồi.
// Cách viết đúng:
button.addEventListener("click", handleButton);

// +++++
// bubbling trong sự kiện click:
// => Hiện tượng nổi bọt.
// => Tức là trong 1 Element có nhiều phần tử mà đều có sự kiện click ví dụ như trong button có span khi chúng ta click vào span thì đồng thời click vào cả button -> Đó gọi là nổi bọt(nổi từ dưới lên trên).
// => Sự kiện click chạy từ trong ra ngoài.
const button2 = document.querySelector(".button2");
const span = document.querySelector(".button2 span");
function handleButton2() {
  console.log("Click me btn 2 !");
}
button2.addEventListener("click", handleButton2);

// stopImmediatePropagation():
// => Sự kiện ngăn không cho những người nghe khác của cùng một sự kiện được gọi.
span.addEventListener(
  "click",
  function (e) {
    e.stopImmediatePropagation();
    console.log("click span 2 !");
  },
  {
    capture: true,
  }
);

// => Chúng ta sử dụng e.stopPropagation() để ngăn chặn quá trình nổi bọt.
// => e.stopPropagation() chỉ chặn được 1 cái của chính nó thôi.
// event: thường viết tắt là chữ e or event or evt.
span.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click span !");
});

// document.body.addEventListener("click", function () {
//   console.log("click body");
// });

// +++++
// event.target and event.currentTarget:
// => Hai cái này xuất hiện khi chúng ta click hoặc một sự kiện nào đó khác.
const button3 = document.querySelector(".button3");
// console.log(button3);
button3.addEventListener("click", function (event) {
  // event.target: nó sẽ chọn chính xác element mà mình click tới.
  console.log(`event.target: ${event.target}`);
  // event.currentTarget: nó sẽ chọn phần tử mà mình click.
  console.log(`event.currentTarget: ${event.currentTarget}`);
});

// +++++
// event.preventDefault():
// => Dùng để ngăn chặn 1 hành vi mặc định nào đó.
// Ví dụ: ta có thẻ a bình thường nếu click vào nó sẽ load tới trang đó nếu dùng event.preventDefault() thì nó sẽ đúng yên không thực hiện load tới trang đó.
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("preventDefault");
});

// +++++
// Truy xuất giá trị custom attribute:
// custom attribute trong html hay viết như sau: data-name(đặt tên theo ý muốn và viết thường nếu dài quá thì -name phía sau nữa).
const link2 = document.querySelector(".link2");
link2.addEventListener("click", function (event) {
  event.preventDefault();
  // Lấy custom attribute data-name
  // Syntax: event.target.dataset.name
  const name = event.target.dataset.name;
  // Nếu mà name dài hơn ( ví dụ data-name-abc) thì đặt theo camelCase.
  // const name = event.target.dataset.nameAbc;

  console.log(name);
});

// +++++
// Object style
// console.log()
// selector.style.property = value
// event.target.style.property = value
// console.log(event.target);
// console.log(event.target.style);
// event.target.style.color = "red";
// background-color -> backgroundColor
// position -> position

// ======================================================================
// NHỮNG KIẾN THỨC LIÊN QUAN ĐẾN LOAD
// +++++
// document.addEventListener("DOMContentLoaded")
// => Khi HTML nó load rồi
window.addEventListener("load", function () {
  console.log("your web loaded");
});

// +++++
// window.addEventListener("load")
// => Khi mà web chúng ta load xong hoàn toàn mới làm việc gì đó
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
});
// web fully loaded

// ======================================================================
// SỰ KIỆN LIÊN QUAN VỀ DI CHUỘT (MOUSE)
const buttonMouse = document.querySelector(".button-mouse");

// +++++
// mousemove, mouseover, mouseenter, mouseleave

// +++
// mousemove:
// => Nó sẽ chạy khi rê chuột vào phần tử đó.
// => Di chuyển lên 1 phần tử.
// buttonMouse.addEventListener("mousemove", function () {
//   console.log("Mousemove");
// });

// +++
// mouseover:
// => Nó sẽ chạy khi rê chuột vào phần tử đó và con của phần tử đó.
// buttonMouse.addEventListener("mouseover", function () {
//   console.log("mouseover");
// });

// +++
// mouseenter:
// => Nó sẽ chạy khi rê chuột vào phần tử.
// buttonMouse.addEventListener("mouseenter", function () {
//   console.log("mouseenter");
// });

// +++
// mouseleave:
// => Nó sẽ chạy khi rê chuột vào phần tử rồi rê ra ngoài
buttonMouse.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});

// +++++
// pageX, pageY, clientX, clientY
// => Toạ độ của chuột khi di chuyển.

document.addEventListener("mousemove", function (event) {
  // console.log(`pageY: ${event.pageY}`);
  // console.log(`clienY: ${event.clientY}`);
});

// clientY: Nó sẽ lấy toạ độ theo viewport
// pageY: Nó sẽ lấy toạ độ của document, khi mà có scroll thì nó sẽ thay đổi.
// X: Chiều ngang
// Y: Chiều dọc

// ======================================================================
// NHỮNG KIẾN THỨC LIÊN QUAN VỀ FORM
// +++++
// keydown:
// => Sự kiện dành cho input
// => Sự kiện này hoạt động khi nhấn bàn phím xuống.
const input = document.querySelector(".input");
input.addEventListener("keydown", function (event) {
  // console.log(event.key);
  // event.key: key chúng ta nhập vào.
  // console.log(event.keyCode);
  // event.keyCode: code của key chúng ta nhập vào.
  // console.log(event.which);
  // event.which: giá trị ASCII của key chúng ta nhập vào.
  // if (event.key === "Enter") {
  //     console.log("You hit Enter!");
  //   } else {
  //     console.log(event.key);
  //   }
  //   console.log(event.key);
  //   if (e.key === "Home") {
  //     console.log("working");
  //   }
});

// +++++
// keyup:
// => Sự kiện này xảy ra khi nhấn phím rồi thả ra.
const input2 = document.querySelector(".input2");
input2.addEventListener("keyup", function (e) {
  console.log(e.key);
  e.preventDefault();
});

// +++++
// keypress:
// => Sự kiện này xảy ra khi chúng ta nhấn phím xuống.
// => keypress sẽ ignore các phím như delete, mũi tên, page up, page down, home, end, ctrl, alt, shift, esc.
const input3 = document.querySelector(".input3");
input3.addEventListener("keypress", function (e) {
  // console.log(e.key);
  // if (e.key === "Home") {
  //   console.log("working");
  // }
});
// => Thứ tự ưu tiên keydown -> keypress -> keyup.

// +++++
// change:
// => Xảy ra khi gõ xong, nhấn Enter hoặc nhấn chuột ra ngoài 1 lần.
input3.addEventListener("change", function (e) {
  // console.log("working");
});

// +++++
// focus:
// => Mỗi lần chúng ta nhấn vào input.
input3.addEventListener("focus", function (e) {
  // console.log("input is focusing");
});

// +++++
// blur:
// => Mỗi lần chúng ta nhấn vào input rồi chúng ta nhấn ra ngoài.
input3.addEventListener("blur", function (e) {
  console.log("input is blur");
});

// +++++
// submit Form:
const form = document.querySelector(".form");
const input4 = document.querySelector(".input4");
form.addEventListener("submit", function (e) {
  // alert("Form Submitted");
  e.preventDefault(); // => Ngăn chặn hành vi mặc định.
  console.log(input4.value);

  // LẤY GIÁ TRỊ CỦA INPUT CÁCH 1:
  // if (input4.value === "") {
  //   alert("Chưa nhập dữ liệu gì !");
  // }
});

// TRUY XUẤT GIÁ TRỊ CÁCH 2:
// => Chúng ta dựa vào cái form để lấy ra những giá trị những giá trị trong form đó.
// Form dựa vào name để lấy dữ liệu.
const form2 = document.querySelector(".form2");
// console.log(form2);
const input5 = document.querySelector(".input5");
form2.addEventListener("submit", function (e) {
  e.preventDefault();
  // Truy xuất được giá trị của form đang submit.
  // Sử dụng Keyword (this): nó sẽ đề cập tới cái object gần nhất. Nó sẽ hiểu là cái selector đang add sự kiện.
  // Sử dụng event.target
  // console.log(this);
  // console.log(e.target);

  // Để lấy danh sách những cái Element nằm trong form đó:
  // console.log(this.elements); // => elements Trả ra danh sách các element ở trong form đó.
  // Để lấy value Form dựa vào name cũng có thể dựa vào index.
  // console.log(this.elements["username"]); // => Lấy ra element mà chúng ta muốn. ["username"] là name
  // console.log(this.elements["username"].value); // .value ->lấy giá trị của element đó.
  const username = this.elements["username"].value;
  const gender = this.elements["gender"].value;
  // const hobby = this.elements["hobby"].value; => Bị bí -> stuck
  // console.log({username, gender, hobby});

  // Truy xuất giá trị của checkbox:
  // Checkbox hơi đặc biệt một chút khi mà chúng ta chọn thì chọn được nhiều cái cho nên là dùng như này this.elements["hobby"].value thì không được.
  const hobby = this.querySelectorAll(`input[name="hobby"]`);
  console.log(hobby); //=> Nó sẽ trả về một NodeList.
  let hobbyValue = [];
  // convert hobby sang mảng sử dụng spread operator.
  [...hobby].forEach((item) => hobbyValue.push(item.value));
  console.log(hobbyValue);
  // => Lấy được giá trị của các checkbox đó.
});

// ======================================================================
// EVENT LIÊN QUAN ĐẾN SCROLL
// +++++
// Scroll
window.addEventListener(
  "scroll",
  debounceFn(function (e) {
    console.log("scroll");
  }, 50) // => 50 thời gian.
);

// +++++
// debounce:
// => là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// +++++
// window.pageYOffset:
// => Khoảng cách scroll của window theo chiều dọc so với phía trên cùng
// window.pageXOffset:
// => Khoảng cách scroll của window theo chiều ngang so với phía bên trái.

// +++++
// scrollTop, scrollLeft, scrollTo, scroll, scrollHeight, scrollWidth,
// scrollHeight: -> trả về chiều cao của element bao gồm padding, nhưng không có border
// scrollWidth: -> trả về chiều rộng của element bao gồm padding, nhưng không có border.
const boxed = document.querySelector(".boxed");
// boxed.addEventListener("scroll", function () {
//   console.log(boxed.scrollTop);
//   console.log(boxed.scrollLeft);
// });
// scroll(x, y);

// +++++
// scrollWidth vs offsetWidth
// scrollWidth: => Thuộc tính chỉ đọc Element.scrollWidth là phép đo chiều rộng nội dung của phần tử, bao gồm cả nội dung không hiển thị trên màn hình do tràn.
// offsetWidth: => Thuộc tính chỉ đọc HTMLElement.offsetWidth trả về chiều rộng bố cục của một phần tử dưới dạng số nguyên.
// boxed.offsetWidth -> 200
// boxed.scrollWidth -> 200

// +++++
// scrollIntoView(): scroll tới phạm vi mà có thể thấy nó.

// =======================================================================
// localStorage:
// => Hầu hết các trình duyệt đều hỗ trợ.
// => Giúp chúng ta lưu trữ dữ liệu trên trình duyệt. Để khi người ta reload web lại nó vẫn còn lưu trữ trên đó. Nó chỉ bị mất đi khi người ta xoá cache và localStorage.
// +++++
// 1. localStorage.setItem("key", "value")
localStorage.setItem("name", "evondev");

// +++++
// 2. localStorage.getItem("key")
console.log(localStorage.getItem("name"));

// +++++
// 3. localStorage.removeItem("key")
// localStorage.removeItem("name");

// +++++
// 4. localStorage.clear()
// localStorage.clear();
// Chúng ta lưu trữ giá trị number, string, boolean thì dễ nhưng với mảng or object thì chúng ta phải lưu trữ dưới dạng JSON.stringify()
let arr = [1, 2, 3, 4, 5];
localStorage.setItem("list", JSON.stringify(arr));
const newArr = JSON.parse(localStorage.getItem("list"));
console.log(typeof newArr);

