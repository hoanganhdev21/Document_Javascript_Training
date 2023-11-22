// Validation: -> Dữ liệu nhập vào phải đúng theo một quy chuẩn nào đó.
// ví dụ:
// email -> phải có @gmail.com
// password -> phải có chữ đầu viết hoa, phải dài 8 ký tự, có chữ cái thường, có ký tự đặc biệt.
// Regular expression
/* This code is adding an event listener to the form element with class "form". When the form is
submitted, it prevents the default behavior (submitting the form and refreshing the page) using
`e.preventDefault()`. It then gets the values of the username and password input fields, checks if
they are empty or if the password is too short (less than 8 characters), and displays an alert
message if any of these conditions are true. */
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // => Ngăn chặn hành vi mặc định.
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;
  if (!username) {
    alert("Bạn hãy nhập thông tin ở trường username !");
    return;
  }
  if (!password) {
    alert("Bạn chưa nhập password !");
    return;
  }

  if (password.length < 8) {
    alert("Mật khẩu của bạn quá ngắn !");
    return;
  }
});
