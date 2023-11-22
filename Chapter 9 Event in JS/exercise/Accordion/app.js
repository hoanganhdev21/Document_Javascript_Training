/**
 * The function creates an accordion effect by toggling the height and active class of the content
 * element and rotating the icon when the accordion header is clicked.
 * @param e - e is an event object that contains information about the event that triggered the
 * function. In this case, it is the click event on the accordion header. It can be used to access
 * properties such as the target element, which is the element that triggered the event, and other
 * information about the event such as
 */
const accordionHeader = document.querySelectorAll(".accordion-header");
console.log(accordionHeader);
// Dùng forEach(): để loop qua từng accordion-header.
accordionHeader.forEach((item) =>
  item.addEventListener("click", handleAccordionClick)
);
function handleAccordionClick(e) {
  const content = e.target.nextElementSibling;
  console.log(content.scrollHeight); // => Tính chiều cao của phần tử.
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle("is-active");
  //   Kiểm tra nếu không chứa thì content có height = 0px
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
  }

  //   Xoay chiều icon khi click
  const icons = e.target.querySelector(".icon");
  icons.classList.toggle("fa-angle-down");
  icons.classList.toggle("fa-angle-up");
}
