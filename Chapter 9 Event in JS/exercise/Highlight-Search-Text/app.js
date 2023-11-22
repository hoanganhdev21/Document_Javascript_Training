// Load toàn bộ trang rồi mới thực hiện các chức năng.
window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("input", handleHighlight);
  // input nó sẽ lấy value(Giá trị) mỗi khi chúng ta gõ
  function handleHighlight(e) {
    let filter = e.target.value; // => Nối chuỗi khi ta nhập vào.
    filter = filter.toLowerCase(); // => Biến in hoa thành in thường.
    console.log(filter);
    // forEach() => Loop qua từng item để lấy nội dung.
    [...items].forEach((item) => {
      const text = item.textContent; // => Lấy ra text của từng item.
      const index = text.toLowerCase().indexOf(filter); // => toLowerCase() biến thành in thường để so sánh và indexOf(filter) tìm ra vị trí index nếu tìm thấy thì trả về 0 hoặc vị trí nào đó không tìm tháy thì trả về -1.

      /* Khối mã này đang kiểm tra xem văn bản của mục hiện tại có chứa văn bản bộ lọc hay không và liệu
      chỉ mục của văn bản bộ lọc trong văn bản của mục lớn hơn hoặc bằng 0. Nếu cả hai điều kiện
      là đúng, nó cập nhật HTML của mục để làm nổi bật văn bản bộ lọc bằng cách gói nó trong một `span`
      phần tử với một lớp "chính". Nếu các điều kiện không được đáp ứng, nó sẽ đặt HTML của mục thành
      văn bản gốc của nó. */
      if (index >= 0 && text.toLowerCase().includes(filter)) {
        // Cập nhật nội dung của từng cái dropdown item.
        item.innerHTML = `${text.substring(
          0,
          index
        )}<span class="primary">${text.substring(
          index,
          index + filter.length
        )}</span>${text.substring(index + filter.length)}`;
      } else {
        item.innerHTML = text;
      }
    });
  }
});
