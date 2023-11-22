/* This code is adding an event listener to the window object that listens for the "load" event. Once
the page has finished loading, it executes a function that sets up a countdown timer that counts
down to a specific date and time. The countdown timer is displayed on the page using HTML elements
with class names "days", "hours", "minutes", and "seconds". The function uses the Date object to
calculate the time remaining until the target date and updates the text content of the HTML elements
with the corresponding values. */
window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");

  function countdown(date) {
    /* `const endDate = new Date(date).getTime();` đang tạo một đối tượng Date mới bằng cách sử dụng `date`
    tham số được truyền cho hàm `countdown` và sau đó lấy dấu thời gian Unix của ngày đó
    sử dụng phương thức `getTime()`. Dấu thời gian Unix biểu thị số mili giây có
    trôi qua kể từ ngày 1 tháng 1 năm 1970, 00:00:00 UTC. Dấu thời gian này được sử dụng để tính toán thời gian
    còn lại cho đến ngày mục tiêu trong chức năng `tính toán`. */
    const endDate = new Date(date).getTime();
    /* `let currentDate = new Date().getTime();` đang tạo một đối tượng Date mới đại diện cho ngày hiện tại
    ngày và giờ, sau đó lấy dấu thời gian Unix của ngày đó bằng phương thức `getTime()`.
    Dấu thời gian Unix biểu thị số mili giây đã trôi qua kể từ ngày 1 tháng 1,
    1970, 00:00:00 UTC. Dấu thời gian này được sử dụng sau này trong hàm để tính toán thời gian còn lại
    cho đến ngày mục tiêu. */
    let currentDate = new Date().getTime();
    /* Dòng mã này đang kiểm tra xem biến `endDate` không phải là số (NaN) hay không
    chênh lệch giữa `endDate` và `currentDate` nhỏ hơn hoặc bằng 0. Nếu một trong hai
    điều kiện là đúng, hàm trả về và không thực hiện đồng hồ đếm ngược. Đây là một
    kiểm tra để đảm bảo rằng ngày mục tiêu là hợp lệ và trong tương lai. */
    if (isNaN(endDate) || endDate - currentDate <= 0) return;
    /* `setInterval(calculate, 1000);` đang thiết lập bộ hẹn giờ gọi hàm `calculate` mỗi
    1000 mili giây (1 giây). Điều này cho phép đồng hồ đếm ngược cập nhật mỗi giây và hiển thị
    đúng thời gian còn lại. */
    setInterval(calculate, 1000);
    /**
     * The function calculates the remaining time between the current date and a specified end date and
     * displays it in days, hours, minutes, and seconds.
     * @returns If the time remaining is less than or equal to 0, the function will return nothing
     * (undefined).
     */
    function calculate() {
      let days, hours, minutes, seconds;
      const now = new Date();
      const startDate = now.getTime();
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      if (timeRemaining > 0) {
        // 1 ngày = 24 * 60 * 60 = 86400
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        // 1 giờ = 60 * 60 = 3600
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;
        // 1 phút = 60
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        seconds = parseInt(timeRemaining);
        daysText.textContent = `0${days}`.slice(-2);
        hoursText.textContent = `0${hours}`.slice(-2);
        minutesText.textContent = `0${minutes}`.slice(-2);
        secondsText.textContent = `0${seconds}`.slice(-2);
      } else {
        return;
      }
    }
  }
  countdown("Wed Aug 1 2023 22:44:42 GMT+0700 (Indochina Time)");
});
