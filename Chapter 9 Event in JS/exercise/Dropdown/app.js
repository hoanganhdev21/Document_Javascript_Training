/* This code is creating a dropdown menu functionality in JavaScript. It selects the necessary elements
from the HTML using `document.querySelector` and `document.querySelectorAll`, adds event listeners
to the dropdown select and items, and toggles classes to show/hide the dropdown list and change the
selected item. It also adds a click event listener to the document to close the dropdown list when
clicking outside of it. */
const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownCaret = document.querySelector(".dropdown__caret");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdown = document.querySelector(".dropdown");
console.log(dropdownSelect);
// Dropdown select
dropdownSelect.addEventListener("click", function (event) {
  dropdownList.classList.toggle("show");
  dropdownCaret.classList.toggle("fa-caret-up");
});
// Dropdown item
dropdownItems.forEach((item) =>
  item.addEventListener("click", function (event) {
    // Tạo biến để lấy chữ
    const text = event.target.querySelector(".dropdown__text").textContent;
    // Thay đổi chữ
    dropdownSelected.textContent = text;
    dropdownList.classList.remove("show");
  })
);
// Click to document
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdownList.classList.remove("show");
    // dropdownList.classList.add("show");
    dropdownCaret.classList.toggle("fa-caret-up");
  }
});
