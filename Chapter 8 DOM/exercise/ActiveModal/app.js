/* This code is selecting an HTML element with the class "modal" using
`document.querySelector(".modal")` and storing it in the `modal` constant. It then checks if `modal`
exists using `if (modal)` and if it does, it adds the class "is-show" to the `modal` element after a
delay of 3 seconds using `setTimeout`. This is likely used to display a modal or popup after a
certain amount of time has passed. */
const modal = document.querySelector(".modal");
console.log(modal);
if (modal) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 3000);
}
