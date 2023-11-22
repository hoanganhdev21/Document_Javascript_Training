/* This code is adding an event listener to the window object for the "load" event. When the page
finishes loading, it selects all elements with the class "menu-link" and converts them into an array
using the spread operator. It then adds a mouseenter event listener to each link in the array, which
calls the handleHoverLink function. */
window.addEventListener("load", function () {
  //   Lấy danh sách chứa các links
  //   Biến thành array sử dụng spread operator [...document.querySelectorAll(".menu-link")]
  const links = [...document.querySelectorAll(".menu-link")];
  //   forEach() => Loop qua từng item.
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  //   Toạ ra đường line khi web loa xong
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line); // => In ra ngoài body.

  function handleHoverLink(event) {
    const { left, top, width, height } = event.target.getBoundingClientRect(); // => getBoundingClientRect(): lấy ra toạ độ kích thước của từng phần tử.
    console.log({ left, top, width, height });
    const offsetBottom = 5; // => Khoảng cách giữa line vs link
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + offsetBottom}px`;
  }

  //   Rê chuột ra ngoài menu sẽ mất line.
  const menu = document.querySelector(".menu");
  menu.addEventListener("mouseleave", function () {
    line.style.width = 0;
  });
});
