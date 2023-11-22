// Date: những cái liên quan đến day-month-year and hour-minute-second.
const now = new Date();
// new Date() => built-in object => Là những cái có sẵn đã được tích hợp ở trong JS
console.log(now);
// Sun Jun 18 2023 03:39:46 GMT+0700 (Giờ Đông Dương)
// Timezone(múi giờ): GMT+0700 (Indochina Time)
// Second(giây): 46
// Minute(phút): 39
// Hour(giờ): 03
// Year(năm): 2023
// Month(tháng): Jun
// Day(ngày): 18
// Day of the week(thứ trong tuần): Sun

// Timestamp & Epoch time
// Timestamp dựa trên Unix time
// timestamp tính ra kết quả là miliseconds.
console.log(now.getTime()); // => print timestamp.
console.log(new Date(0)); // => có thể truyền vào những chuỗi liên quan đến ngày thắng năm.
// 4 cách sử dụng new Date
// new Date() -> In ra ngày giờ hiện tại
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ
// new Date(date string) ->
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
console.log(new Date(1620924981606));
console.log(new Date("Sun Jun 18 2023 03:39:46 GMT+0700 (Giờ Đông Dương)"));
console.log(new Date(2023, 5, 18, 3, 39, 46, 11));

// ======================================================================
// CÁC HÀM GET TRONG DATE:
const birthday = new Date(2001, 3, 1);

// In ra year(năm):
console.log(birthday.getFullYear()); // => 2001.

// In ra month(tháng):
// => getMonth(): sẽ tính từ tháng 0-11.
// => Tức là tháng 0 sẽ là tháng 1 và tháng 11 sẽ là tháng 12.
console.log(birthday.getMonth()); // => 4.

// In ra ngày của tháng: 1 -> 31
console.log(birthday.getDate()); // => 1.

// In ra thứ của tuần:
// Chạy từ 0-6: => 0: Chủ Nhật, 6: Thứ Bảy
console.log(birthday.getDay()); // => 0.

// In ra giờ:
console.log(birthday.getHours());
// In ra phút
console.log(birthday.getMinutes());

// In ra giây
console.log(birthday.getSeconds());

// In ra mili giây
console.log(birthday.getMilliseconds());

// In ra timestamp
console.log(birthday.getTime()); // => 986058000000.

// =====================================================================
// CÁC HÀM SET TRONG DATE:
console.log(`My birthday setDate: ${birthday}`);
birthday.setFullYear(2000);
birthday.setMonth(10);
birthday.setDate(30);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(`My birthday setupdate update: ${birthday}`);

// ======================================================================
// UTC
// https://en.wikipedia.org/wiki/Coordinated_Universal_Time

// in ra năm
console.log(birthday.getUTCFullYear());
// In ra tháng
// => getUTCMonth(): sẽ tính từ tháng 0-11.
// => Tức là tháng 0 sẽ là tháng 1 và tháng 11 sẽ là tháng 12.
console.log(birthday.getUTCMonth());

// In ra ngày của tháng: 1 -> 31
console.log(birthday.getUTCDate());

// In ra thứ của tuần
// Chạy từ 0-6: => 0: Chủ Nhật, 6: Thứ Bảy
console.log(birthday.getUTCDay());

// In ra giờ
console.log(birthday.getUTCHours());

// In ra phút
console.log(birthday.getUTCMinutes());

// In ra giây
console.log(birthday.getUTCSeconds());

// In ra mili giây
console.log(birthday.getUTCMilliseconds());

// Date String:
console.log(now.toDateString()); // => Sun Jun 18 2023
console.log(now.toTimeString()); // => 04:50:41 GMT+0700 (Giờ Đông Dương)
console.log(now.toLocaleDateString()); // => 6/18/2023. => m/dd/yyyy -> 6/18/2023.
// 18/6/2023
console.log(now.toLocaleDateString("vi-VI")); // 18/6/2023
console.log(now.toISOString()); // 2023-06-17T21:53:03.822Z

// Ví dụ:
// input: Fri May 14 2021 00:26:21 GMT+0700 (Indochina Time)
const myTime = new Date("Fri May 14 2021 00:26:21 GMT+0700 (Indochina Time)"); // 14/5/2021
const myYear = myTime.getFullYear(); // 2021
const myMonth = myTime.getMonth() + 1; // 5
const myDate = myTime.getDate(); // 14
const prefixMonth = myMonth < 10 ? "0" : ""; // => check conditional nếu myMonth ?(điều kiện đúng) thì thêm số 0 :(điều kiện ngược lại) thi để rông "".
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);

// ======================================================================
// setTimeout với setInterval:

// setTimeout:
// => Phương thức setTimeout() toàn cầu đặt bộ hẹn giờ thực thi một chức năng hoặc đoạn mã được chỉ định sau khi bộ hẹn giờ hết hạn.
// => Xet một khoảng thời gian nhất định tức là sau khoảng thời gian bao lâu thì sẽ thực hiện một việc gì đó.
const timer1 = setTimeout(function () {
  alert("call me after 3 seconds");
}, 3000); // => 3000 thời gian thực hiện.
clearTimeout(timer1); // => Dừng thời gian lại.

// setInterval:
// => Phương thức setInterval(), được cung cấp trên giao diện Window và Worker, liên tục gọi một hàm hoặc thực thi một đoạn mã, với độ trễ thời gian cố định giữa mỗi lần gọi.
// => Phương thức này trả về một ID khoảng thời gian xác định duy nhất khoảng thời gian, vì vậy bạn có thể xóa nó sau bằng cách gọi clearInterval().
// => Chạy liên tục.
const timer2 = setInterval(function () {
  console.log("call me");
}, 1000);
clearInterval(timer2); // => Dừng thời gian lại.
