// Module là một bộ phận, một phần nào đó tập hợp rất nhiều các hàm, function ở trong đó khi chúng ta muốn sử dụng nó thì chỉ cần gọi nó ra thôi
// Lý do sử dụng:
// + Nó có tính bảo trì
// + nameSpacing(tại vì trong js nếu chúng ta khai báo biến bằng global thì tất cả mọi nơi đều sử dụng được thì xảy ra vấn đề trùng tên gây ra lỗi).
// + Có thể tái sử dụng(chúng ta dùng ở dự án này rồi muốn dùng ở dự án khác thì chúng ta dễ dàng di chuyển và import nó vào)
import debounceFunction, { myName, job } from "./utils.js";

window.addEventListener(
  "scroll",
  debounceFunction(function (e) {
    console.log("scroll");
  }, 50)
);
console.log(myName);
console.log(job);

// debounceFn bên này chúng ta có thể đổi tên được không nhất thiết phải để giống bên utils