/* This code is adding a tooltip functionality to an element with the class "text". When the user
hovers over the element, a tooltip with the text from the "data-tooltip" attribute will appear above
the element. The tooltip is positioned using the element's position and size, and is removed when
the user moves the mouse away from the element. The code is wrapped in an event listener for the
"load" event, which ensures that the code is executed only after the page has finished loading. */
/* This code is adding an event listener to a menu toggle button that toggles the visibility of a menu
when clicked. It also changes the icon of the button from a hamburger menu to an "X" when the menu
is visible. Additionally, it adds a click event listener to the document that closes the menu if the
user clicks outside of it or on the menu toggle button again. */
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("is-show");
  menuToggle.classList.toggle("fa-bars");
  menuToggle.classList.toggle("fa-times");
});
document.addEventListener("click", function (event) {
  // console.log(event.target);
  // event.target.matches: -> Kiểm tra xem có khớp hay không.
  // event.target.contains: -> Kiểm tra xem có chứa hay không.
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    menuToggle.classList.remove("fa-times");
    menuToggle.classList.add("fa-bars");
  }
});
