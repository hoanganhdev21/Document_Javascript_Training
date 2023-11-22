/* This code is selecting an HTML element with the class "menu" using the `document.querySelector()`
method and storing it in the `menu` constant. Then, it logs the `menu` constant to the console.
Finally, it toggles the "is-show" class on the `menu` element using the `classList.toggle()` method. */
const menu = document.querySelector(".menu");
console.log(menu);
menu.classList.toggle("is-show");
