/* This code is adding an event listener to the `window` object for the `load` event. When the page has
finished loading, the function inside the event listener is executed. This function selects various
elements from the DOM, sets some variables, and adds event listeners to the next and previous
buttons and the dot items. It also defines a function `handleChangeSlide` that is called when the
next or previous buttons are clicked, or when a dot item is clicked. This function updates the
position of the slider and the active dot item based on the direction of the slide. */
window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  const sliderItemWidth = sliderItems[0].offsetWidth; // => Lấy độ rộng của index đầu tiên [0]
  const slidesLength = sliderItems.length; // => Lấy số lượng phần tử
  let postionX = 0;
  let index = 0;
  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  /* This code is adding an event listener to each dot item in the slider. When a dot item is clicked,
  it removes the "active" class from all dot items, adds the "active" class to the clicked dot item,
  and updates the position of the slider based on the index of the clicked dot item. It also sets
  the `index` variable to the index of the clicked dot item and updates the `postionX` variable
  based on the new index and the width of the slider item. Finally, it updates the `transform`
  property of the `sliderMain` element to move the slider to the new position. */
  [...dotItems].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...dotItems].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      postionX = -1 * index * sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
    })
  );
  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= slidesLength - 1) {
        index = slidesLength - 1;
        return;
      }
      postionX = postionX - sliderItemWidth; // => positionX trừ đi độ rộng của phần tử.
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index++;
    } else if (direction === -1) {
        if (index <= 0) {
          index = 0;
          return;
        }
      postionX = postionX + sliderItemWidth; // => positionX trừ đi độ rộng của phần tử.
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index--;
    }
    [...dotItems].forEach((el) => el.classList.remove("active"));
    dotItems[index].classList.add("active");
  }
});
