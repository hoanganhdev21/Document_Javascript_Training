// +++++
// defer in script
// Nếu để script trong thẻ head -> blocking page -> nó phải chờ cho cái script load xong rồi nó mới xuống loa những cái DOM ở phía bên dưới.
// để giải quyết người ta sử dụng defer
// <script defer src="app.js"></script>
// => defer nó sẽ báo với trình duyệt không phải chờ cái script load xong thì mới load những cái DOM ở dưới.
// => none-blocking page.
// Dử dụng defer khi nào?
// -> Sử dụng defer khi chúng ta muốn sử dụng 1 thư viện nào đó và phụ thuộc vào nó.

// +++++
// async in scrip:
// Nó giống defer: none-blocking page.
// async nó sẽ bất đồng bộ không quan tâm tới những thằng khác load hay chưa chỉ load độc lập.
// Dùng trong trường hợp nào?
// => Khi mà chúng ta muốn sử dụng bên thứ 3 ví dụ như quảng cáo gg, fb nó sẽ có những script.

// +++++
// removeEventListener()
// => Phương thức removeEventListener() của giao diện EventTarget loại bỏ một trình lắng nghe sự kiện đã đăng ký trước đó với EventTarget.addEventListener() khỏi mục tiêu. Trình xử lý sự kiện cần xóa được xác định bằng cách sử dụng kết hợp loại sự kiện, chức năng trình xử lý sự kiện và các tùy chọn tùy chọn khác nhau có thể ảnh hưởng đến quá trình so khớp; xem Trình xử lý sự kiện phù hợp để loại bỏ.
// => Việc gọi removeEventListener() với các đối số không xác định bất kỳ trình xử lý sự kiện nào hiện đã đăng ký trên EventTarget sẽ không có tác dụng.
// => Nếu một trình lắng nghe sự kiện bị xóa khỏi EventTarget trong khi một trình nghe khác của mục tiêu đang xử lý một sự kiện, thì sự kiện đó sẽ không được kích hoạt. Tuy nhiên, nó có thể được gắn lại.
const button = document.querySelector(".button");

// function handleMouseMove(e) {
//   console.log(e.clientX);
// }
// document.addEventListener("mousemove", handleMouseMove);

// button.addEventListener("click", function () {
//   document.removeEventListener("mousemove", handleMouseMove);
// });

// +++++
// onclick vs addveventlistener-click
function handleClick1() {
  console.log("clicked 1");
}
function handleClick2() {
  console.log("clicked 2");
}
// onclick: => chỉ chấp nhận được 1 event handler
// addEventListener: => Chấp nhận nhiều event handler cùng lúc
// button.onclick = handleClick1;
// button.onclick = handleClick2;
button.addEventListener("click", handleClick1);
button.addEventListener("click", handleClick2, {
  // tham số thứ 3
  // chỉ chạy 1 lần duy nhất
  once: true,
});

// +++++
// onmousemove, onmousedown
// Các sự kiện khác: touchstart, touchmove, touchend, dragstart, dragenter, dragover, dragleave, dragend, drop mà các bạn có thể tự tìm hiểu thêm
