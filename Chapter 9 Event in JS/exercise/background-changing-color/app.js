/**
 * The function changes the background color of the body element to a random color from a pre-defined
 * array of colors when a button is clicked.
 */
// Tạo mảng chứa danh sách các màu.
const colors = [
  "#ffa400",
  "#00aefd",
  "#ff6bcb",
  "#07a787",
  "#2979ff",
  "#e74c3c",
  "#3D6EF7",
];
function changingColor() {
  // Chúng ta cần phải chọn được selector là body
  // Có hai cách để set background cho body
  //   document.body.setAttribute("style", "background-color: red") // => Cách 1
  //   document.body.style.backgroundColor ='red' // => Cách 2

  // Random các mã màu:
  // Lấy màu từ mảng colors
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
const changeButton = document.querySelector(".change");
changeButton.addEventListener("click", changingColor);
