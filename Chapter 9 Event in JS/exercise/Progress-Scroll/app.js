/* This code is creating a progress bar that shows the user how far they have scrolled down a webpage.
It does this by calculating the percentage of the page that has been scrolled and updating the width
of the progress bar accordingly. The `const progress = document.querySelector(".progress");` line
selects the HTML element with the class "progress" and assigns it to the `progress` variable. The
`window.addEventListener("scroll", function () {...}` line adds an event listener to the window
object that listens for the "scroll" event and executes the function inside the curly braces
whenever the event is triggered. The function calculates the percentage of the page that has been
scrolled and updates the width of the progress bar by setting its `style.width` property to the
calculated percentage. */
const progress = document.querySelector(".progress"); // => Lấy ra progress.
window.addEventListener("scroll", function () {
  // khoảng cách của scrollbar so với phía trên khi scroll
  const scrollTop = window.pageYOffset; // => Tính scrollTop xem bằng bào nhiêu
  // chiều cao của document bao gồm scrollbar document.documentElement.scrollHeight
  // chiều cao của document ko bao gồm scrollbar document.documentElement.clientHeight
  //  Tính ra chiều cao của scrollbar:
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  //   console.log(height);
  const width = (scrollTop / height) * 100;
  //   console.log(width);
  progress.style.width = `${width}%`;
});
