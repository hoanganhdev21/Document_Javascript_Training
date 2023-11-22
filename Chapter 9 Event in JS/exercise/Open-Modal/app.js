/* This code is adding a modal to the webpage when a button with the class "button" is clicked. The
modal is created using a template string and inserted into the end of the body element using the
`insertAdjacentHTML` method. The code also handles closing the modal when the user clicks on the "X"
button or outside of the modal by removing the modal element from the DOM using the `removeChild`
method. */
const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
// Xử lý khi click button sẽ thêm modal
button.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});

// Xử lý khi click để thoát
document.body.addEventListener("click", function (event) {
  if (event.target.matches(".modal-close")) {
    const modal = event.target.parentNode.parentNode; // => modal
    modal.parentNode.removeChild(modal);
  } else if (event.target.matches(".modal")) {
    event.target.parentNode.removeChild(event.target);
  }
});
