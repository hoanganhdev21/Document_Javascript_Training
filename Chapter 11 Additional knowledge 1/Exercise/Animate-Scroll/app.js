/* This code is adding an event listener to the document that waits for the DOM to be fully loaded.
Once the DOM is loaded, it selects all the images inside a container using
`document.querySelectorAll(".container img")`. It then adds an event listener to the window that
listens for a scroll event. When the user scrolls, it checks the position of each image relative to
the top of the window using `item.offsetTop` and the height of the image using `item.offsetHeight`.
If the image is more than halfway visible in the window, it adds the class "active" to the image
using `item.classList.add("active")`. This is likely used to trigger some sort of animation or
effect on the image when it becomes visible in the window. */
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".container img"); // => Lấy ra tất cả các hình
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset; // => Khoảng cách scroll của window theo chiều dọc
    console.log(windowScrollTop);
    // Loop qua từng hình
    [...images].forEach((item) => {
      const itemOffsetTop = item.offsetTop;
      const itemOffsetHeight = item.offsetHeight;
      if (windowScrollTop > itemOffsetTop - itemOffsetHeight / 2) {
        item.classList.add("active");
      }
    });
  });
});
