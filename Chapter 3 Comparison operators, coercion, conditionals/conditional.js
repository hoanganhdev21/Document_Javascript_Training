// Câu điều kiện: => Nếu điều kiện đúng thì sẽ thực hiện một việc gì đó còn ngược lại nếu sai thì thực hiện một việc gì đó.
// if (condition) {
// your code here;
// }

const isRich = true;
const myMoney = 100000000;
if (!isRich) {
  console.log("I will buy a new car !");
} else if (myMoney > 1000) {
  console.log("i will give you some money");
} else {
  console.log("I poor");
}

// ======================================================================
// Tìm hiểu Alert, Prompt, Confirm:
alert("Your website has been hacked");
const yourName = prompt("Vui long nhap vao ten cua ban", "");
console.log(yourName);
const isYourMoney = confirm("Day co phai la tien cua ban hay khong?");
// console.log(isYourMoney);
// const 1abc = "sdfs";
// const abc-xyz = "sdfs";
// const new = 123;
