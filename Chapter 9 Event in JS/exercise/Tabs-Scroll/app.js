/* This code is adding an event listener to the `window` object that listens for the `load` event. Once
the page has loaded, it selects all elements with the class `tab-item` and assigns them to the
`tabItems` variable. It also selects the element with the class `tab-list` and assigns it to the
`tabList` variable, and selects the element with the class `tab` and assigns it to the `tab`
variable. It then calculates the offset left of the `tab` element and assigns it to the
`tabOffsetLeft` variable. */
window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabList = document.querySelector(".tab-list");
  const tab = document.querySelector(".tab");
  const tabOffsetLeft = tab.offsetLeft;

  [...tabItems].forEach((item) =>
    item.addEventListener("click", handleTabClick)
  );

  function handleTabClick(e) {
    // Loop qua từng cái để xoá hết class cũ đi.
    [...tabItems].forEach((item) => item.classList.remove("active"));
    // Sau đó mới add class mới vào.
    e.target.classList.add("active");

    let leftSpacing = e.target.offsetLeft - tabOffsetLeft;
    // console.log(leftSpacing);
    tabList.scroll(leftSpacing / 2, 0);
    // document.querySelector(".tab-list").scroll(x, 0);
  }
});
