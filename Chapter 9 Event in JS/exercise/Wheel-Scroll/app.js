// window.addEventListener("load", function () {
//   const tabItems = document.querySelectorAll(".tab-item");
//   const tabList = document.querySelector(".tab-list");
//   const tab = document.querySelector(".tab");
//   const tabNext = document.querySelector(".tab-next");
//   const tabPrev = document.querySelector(".tab-prev");
//   const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
//   let deltaScroll = 40;
//   [...tabItems].forEach((item) =>
//     item.addEventListener("click", handleTabClick)
//   );
//   function handleTabClick(e) {
//     [...tabItems].forEach((item) => item.classList.remove("active"));
//     e.target.classList.add("active");
//     e.target?.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   }
//   tabList.addEventListener("wheel", function (e) {
//     e.preventDefault();
//     const delta = e.deltaY;
//     this.scrollLeft += delta;
//     if (this.scrollLeft > 0) {
//       tabPrev.classList.remove("disabled");
//     } else {
//       tabNext.classList.remove("disabled");
//     }
//     if (this.scrollLeft >= tabScrollWidth) {
//       tabNext.classList.add("disabled");
//     } else if (this.scrollLeft <= 0) {
//       tabPrev.classList.add("disabled");
//     }
//   });
//   tabNext.addEventListener("click", function (e) {
//     tabPrev.classList.remove("disabled");
//     tabList.scrollLeft += deltaScroll;
//     if (tabList.scrollLeft >= tabScrollWidth) {
//       this.classList.add("disabled");
//     }
//   });
//   tabPrev.addEventListener("click", function (e) {
//     tabNext.classList.remove("disabled");
//     tabList.scrollLeft -= deltaScroll;
//     if (tabList.scrollLeft <= 0) {
//       this.classList.add("disabled");
//     }
//   });
// });

window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabList = document.querySelector(".tab-list");
  const tab = document.querySelector(".tab");
  const tabOffsetLeft = tab.offsetLeft;
  const tabNext = document.querySelector(".tab-next");
  const tabPrev = document.querySelector(".tab-prev");
  /* `const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;` is calculating the maximum
  scrollable width of the tab list container. It subtracts the visible width of the container
  (`clientWidth`) from the total width of the container (`scrollWidth`) to get the maximum amount
  that the container can be scrolled horizontally. This value is used to determine when to disable
  the "next" button when scrolling to the right and when to disable the "previous" button when
  scrolling to the left. */
  const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth; // => tabList là tab chúng ta sẽ scroll
  let deltaScroll = 40; // => Để mỗi lần bấm next sẽ cộng cho nó
  [...tabItems].forEach((item) =>
    item.addEventListener("click", handleTabClick)
  );

  function handleTabClick(e) {
    // Loop qua từng cái để xoá hết class cũ đi.
    [...tabItems].forEach((item) => item.classList.remove("active"));
    // Sau đó mới add class mới vào.
    e.target.classList.add("active");
    // let leftSpacing = e.target.offsetLeft - tabOffsetLeft; // => Trường hợp không có icon ở hai đầu
    // Trường hợp có thêm hai icons ở đầu
    let leftSpacing = e.target.offsetLeft;
    if (e.target.offsetLeft >= tabOffsetLeft) {
      leftSpacing = e.target.offsetLeft - tabOffsetLeft;
    }

    console.log(leftSpacing);
    tabList.scroll(leftSpacing / 2, 0);
    // document.querySelector(".tab-list").scroll(x, 0);
  }

  //   SỰ kiện wheel tức là con lăn chuột
  tabList.addEventListener("wheel", function (e) {
    e.preventDefault();
    const delta = e.deltaY; // => deltaY -> có giá trị âm hoặc dương. Dương khi scroll lên còn âm khi scroll xuống.
    // console.log(delta);
    this.scrollLeft += delta;

    // Scroll ẩn hiện hai nút icon next prev
    if (this.scrollLeft > 0) {
      tabPrev.classList.remove("disabled");
    } else {
      tabNext.classList.remove("disabled");
    }
    if (this.scrollLeft >= tabScrollWidth) {
      tabNext.classList.add("disabled");
    } else if (this.scrollLeft <= 0) {
      tabPrev.classList.add("disabled");
    }
  });

  //   Next
  tabNext.addEventListener("click", function (e) {
    tabPrev.classList.remove("disabled");
    tabList.scrollLeft += deltaScroll;
    if (tabList.scrollLeft >= tabScrollWidth) {
      this.classList.add("disabled");
    }
  });

  //   Prev
  tabPrev.addEventListener("click", function (e) {
    tabNext.classList.remove("disabled");
    tabList.scrollLeft -= deltaScroll;
    if (tabList.scrollLeft <= 0) {
      this.classList.add("disabled");
    }
  });
});
