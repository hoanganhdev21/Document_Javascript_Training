const fruit = "lemon";
if (fruit === "apple") {
  console.log("You like to eat apple");
}
if (fruit === "lemon") {
  console.log("You like to eat lemon");
}
if (fruit === "watermelon") {
  console.log("You like to eat watermelon");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// => key là variable truyền vào.
// => value giá trị mình muốn.
// => default để mặc định.

const fruits = "lemon"
switch (fruits) {
  case "apples":
    console.log("You like to eat apple");
    break;
  case "watermelon":
  case "lemons":
    console.log("You like to eat lemon and water melon");
    break;
  default:
    console.log("You like to eat orange");
    break;
}

const number = "500";
switch (Number(number)) {
  case 500:
    console.log("500");
    break;

  default:
    break;
}
