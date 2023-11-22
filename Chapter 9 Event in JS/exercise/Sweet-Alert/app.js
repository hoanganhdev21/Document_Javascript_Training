/* This code is adding an event listener to the `window` object for the `load` event. When the page
finishes loading, it will execute the function passed as the second argument. */
window.addEventListener("load", function () {
  // Tạo ra temlate
  function renderSweetAlert() {
    const template = ` <div class="sweet-alert">
      <i class="fa fa-check sweet-icon"></i>
      <p class="sweet-text">Congratulations on learning JS</p>
      </div>`;
    document.body.insertAdjacentHTML("beforeend", template); // => Đưa template ra ngoài body.
  }
  const button = document.querySelector(".button");
  button.addEventListener("click", function () {
    renderSweetAlert();
    const sweetItem = document.querySelector(".sweet-alert");
    if (sweetItem) {
      setTimeout(function () {
        sweetItem.parentElement.removeChild(sweetItem);
      }, 2000);
    }
  });
});
