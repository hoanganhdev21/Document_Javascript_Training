/**
 * The function creates a notification with a random title every 4 seconds.
 * @param [title=welcom to notification] - The title of the notification that will be displayed. It has
 * a default value of "welcome to notification" if no value is provided.
 */
// function tạo ra thông báo
function createNotification(title = "welcom to notification") {
  const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse.
      </p>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}
// Data random title
const randomData = [
  "Welcome to javascript course",
  "Welcome to this tutorial",
  "Today is a good day",
];

let lastTitle;
const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) {
    item.parentNode.removeChild(item);
  }
  // Lấy random title từ mảng randomData
  // Công thức random trong mảng bất kỳ: array[Math.floor(Math.random() * array.length)]
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  if (lastTitle !== title) {
    createNotification(title);
  }
  lastTitle = title;
}, 4000);
