// TƯỜNG HỢP KHI TABCONTENT TRUYỀN ĐÚNG VỊ TRÍ CỦA ATTRIBUTE
// const tabItems = document.querySelectorAll(".tab-item");
// const tabContent = document.querySelectorAll(".tab-content");
// // console.log(tabItems);
// // Để add sự kiện cho từng cái chúng ta cần phải duyệt qua từng cái.
// // => sử dụng forEach()
// // => item là từng phần tử ở trong tab-list.
// tabItems.forEach((item) => item.addEventListener("click", handleTabClick));
// function handleTabClick(event) {
//   console.log(event.target);
//   // Trước đó xoá hết tất cả class active ở các tab-item trước khi nó active vào item mới.
//   // forEach để duyệt lại 1 lần nữa để xoá những cái còn lại đi.
//   tabItems.forEach((item) => item.classList.remove("active"));

//   // Sau đó add class active vào tab hiện tại
//   // Những cái đã active mặc định rồi nó sẽ không cho nhấn vào nữa.
//   // Khi nhấn vào cái nào đó thì nó sẽ có class active và xoá những cái còn lại đi.
//   event.target.classList.add("active");

//   // Sử dụng custom Attribute để gọi đến cái tab content đó.
//   const tabNumber = parseInt(event.target.dataset.tab);
//   console.log(tabNumber);
//   // Duyệt qua từng tabcontent:
//   // Đầu tiên cần loop qua từng cái để remove cái trước đi.
//   tabContent.forEach((item) => item.classList.remove("active"));
//   // Sau đó active vào cái tabcontent mà chúng ta vừa click tới.
//   tabContent[tabNumber - 1].classList.add("active"); // => [tabNumber-1] truy xuất vào vị trí index của nó.
// }

// ==================================================================
// TƯỜNG HỢP KHI TABCONTENT VỊ TRÍ CỦA ATTRIBUTE XẾP LỘN XỘN.
const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
// console.log(tabItems);
// Để add sự kiện cho từng cái chúng ta cần phải duyệt qua từng cái.
// => sử dụng forEach()
// => item là từng phần tử ở trong tab-list.
tabItems.forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  console.log(event.target);
  // Trước đó xoá hết tất cả class active ở các tab-item trước khi nó active vào item mới.
  // forEach để duyệt lại 1 lần nữa để xoá những cái còn lại đi.
  tabItems.forEach((item) => item.classList.remove("active"));

  // Sau đó add class active vào tab hiện tại
  // Những cái đã active mặc định rồi nó sẽ không cho nhấn vào nữa.
  // Khi nhấn vào cái nào đó thì nó sẽ có class active và xoá những cái còn lại đi.
  event.target.classList.add("active");

  // Sử dụng custom Attribute để gọi đến cái tab content đó.
  const tabNumber = event.target.dataset.tab;
  // console.log(tabNumber);
  // Duyệt qua từng tabcontent:
  // Đầu tiên cần loop qua từng cái để remove cái trước đi.
  tabContent.forEach((item) => {
    item.classList.remove("active");

    // Xử lý khi tab-content đảo lộn vị trí:
    // Mình cần phải ktra data-tab của tab-content với lại data-tab của item-tab mình click xem có kớp với nhau hay là không.
    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active");
    }
  });
}
