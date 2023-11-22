// Bài 1: Nhập vào số tuổi và kiểm tra nếu số tuổi lớn hơn hoặc bằng 18 thì được coi phim rạp ngược lại thì không được vô coi.
// const checkAge = prompt("Vui lòng nhập số tuổi của bạn", "");
// // "" => có thể để mặc định là rỗng như này hoặc có thể tuỳ chỉnh.
// console.log(checkAge);
// if(checkAge >= 18){
//     alert("Bạn đủ tuổi vào xem film!")
// }else{
//     alert("Xin lỗi bạn không đủ tuổi vào xem film này!")
// }

// Cách thứ hai:
const yourAge = prompt("Hãy vui lòng nhập số tuổi của bạn vào đây", "");
let message = "Bạn chưa đủ tuổi xem film này !";
console.log(yourAge);
if (yourAge >= 18) {
  message = "Bạn đã đủ tuổi xin mời bạn vào xem film !";
}
alert(message);

// Bài 2: Cho 2 số a và b, tìm ra số lớn hơn.
const a = 5;
const b = 6;
if (a > b) {
  alert(`Số lớn hơn là số ${a}`);
} else if (a < b) {
  alert(`Số lớn hơn là số ${b}`);
} else {
  alert("Không có số nào lớn hơn số nào cả");
}
