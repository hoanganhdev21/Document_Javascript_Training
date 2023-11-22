/* The code is selecting elements with class names "counter-increase", "counter-decrease", and
"counter-number" using querySelector. It then initializes a variable "counterValue" with the value
of the text content of the "counter-number" element, converted to a number using parseInt. The code
then adds event listeners to the "counter-increase" and "counter-decrease" elements, which increment
or decrement the "counterValue" variable and update the text content of the "counter-number" element
accordingly. */
// chọn ra các selector.
const counterAdd = document.querySelector(".counter-increase");
const counterMinus = document.querySelector(".counter-descrease");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent); // => lấy ra giá trị của counter-number. Dùng parseInt để biến nó thành số.
console.log(counterValue);
counterAdd.addEventListener("click", function () {
  // Mỗi lần click sẽ tăng lên 1
  // Có 3 cách:
  counterValue++;
  //   counterValue = counterValue + 1;
  //   counterValue += 1;
  counterNumber.textContent = counterValue;
});
counterMinus.addEventListener("click", function () {
  if (counterValue <= 0) return 0;
  // Mỗi lần click sẽ giảm xuống 1
  // Có 3 cách:
  counterValue--;
  //   counterValue = counterValue - 1;
  //   counterValue -= 1;
  counterNumber.textContent = counterValue;
});
