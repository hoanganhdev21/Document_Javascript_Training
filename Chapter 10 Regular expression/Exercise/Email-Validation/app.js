// Email validation
// valid email: abc@gmail.com abc@yahoo.com
// invalid email: abc
/* This code is adding an event listener to an input field with the class "input" to validate email
addresses. When the user types into the input field, the code checks if the input value matches the
regular expression for a valid email address. If it does, the input field is given the class "valid"
and the class "invalid" is removed. If it does not match, the input field is given the class
"invalid" and the class "valid" is removed. If the input field is empty, the "invalid" class is
removed. */
const emailInput = document.querySelector(".input");
emailInput.addEventListener("input", function (e) {
  const value = e.target.value;
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(value.trim())) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }

  if (!value) {
    e.target.classList.remove("invalid");
  }
});
