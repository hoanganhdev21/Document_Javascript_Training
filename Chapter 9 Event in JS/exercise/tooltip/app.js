/* This code is adding a tooltip functionality to an element with the class "text". When the user
hovers over the element, a tooltip with the text from the "data-tooltip" attribute will appear above
the element. The tooltip is positioned using the element's position and size, and is removed when
the user moves the mouse away from the element. The code is wrapped in an event listener for the
"load" event, which ensures that the code is executed only after the page has finished loading. */
// web load xong trồi mới thực hiện công việc.
window.addEventListener("load", function () {
  const text = document.querySelector(".text");
  // add sự kiện khi re chuột vào text
  text.addEventListener("mouseenter", function (event) {
    // Lấy ra chữ trong attribute
    const title = event.target.dataset.tooltip;
    console.log(title);
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-text";
    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv); // => In ra ngoài body.

    // Lấy vị trí getBoundingClientRect()
    const cords = event.target.getBoundingClientRect();
    const { top, left, width } = cords;
    // Lấy chiều cao của chữ khi rê chuột vào.
    const tooltipHeight = tooltipDiv.offsetHeight;
    const triangleHeight = 10; // => Khoảng cách giữa tooltip với chữ
    // Xét toạ độ cho tooltip
    tooltipDiv.style.left = `${left - width / 2}px`;
    tooltipDiv.style.top = `${top - tooltipHeight - triangleHeight}px`;
  });

  //   Rê chuột ra ngoài sẽ xoá tooltip đi
  text.addEventListener("mouseleave", function (event) {
    const tooltip = document.querySelector(".tooltip-text");
    if (!tooltip) return;
    tooltip.parentNode.removeChild(tooltip);
  });
});
