/* This code adds an event listener to the window object that waits for the page to fully load. Once
the page is loaded, it selects an element with the class "toggle" and adds a click event listener to
it. When the "toggle" element is clicked, the code checks the type attribute of the previous sibling
element (the input field) and toggles it between "password" and "text" types. This allows the user
to show or hide the password they are typing in the input field. */
window.addEventListener("load", function () {
  const togglePassword = document.querySelector(".toggle");
  togglePassword.addEventListener("click", function () {
    // Để chuyển sang text chúng ta cần phải đổi type của nó.
    const input = this.previousElementSibling; // => previousElementSibling lấy cái đúng trước nó.
    const inputType = input.getAttribute("type"); // => getAttribute(): -> lấy cái
    if (inputType === "password") {
      input.setAttribute("type", "text"); // => Chuyển type="text".
    } else {
      input.setAttribute("type", "password"); // => Chuyển type="password".
    }
  });
});
