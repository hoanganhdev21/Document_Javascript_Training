/**
 * This function creates a lightbox to display images and allows the user to navigate through them.
 * @param event - The event parameter is an object that contains information about the event that
 * triggered the function. In this case, it is the click event on an image element.
 */
// Khai báo variable chứa hình
const images = document.querySelectorAll(".content img");
// forEach() -> Loop qua từng ảnh.
images.forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(event) {
  const image = event.target.getAttribute("src");
  const template = `
<div class="lightbox">
 <div class="lightbox-content">
   <i class="fa fa-angle-left lightbox-prev"></i>
   <img
     src="${image}"
     alt=""
     class="lightbox-image"
   />
  //  <i class="fa fa-angle-right lightbox-next"></i>
 </div>
</div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0;
document.addEventListener("click", function (e) {
  // lấy ra src của lightbox-image.
  const lightImage = document.querySelector(".lightbox-image");
  if (!lightImage) return;
  // Lấy đường dẫn hình ảnh.
  let lightSrc = lightImage.getAttribute("src");
  // tìm ra vị trí index của nó
  index = [...images].findIndex(
    (item) => item.getAttribute("src") === lightSrc
  );
  if (e.target.matches(".lightbox")) {
    // remove lightbox out of dom.
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-next")) {
    // Next
    index = index + 1;
    if (index > images.length - 1) {
      index = 0;
    }
    displayLightImage(lightImage, index);
  } else if (e.target.matches(".lightbox-prev")) {
    // prev
    index = index - 1;
    if (index < 0) {
      index = images.length - 1;
    }
    displayLightImage(lightImage, index);
  }
});

function displayLightImage(lightImage, index) {
  const newSrc = [...images][index].getAttribute("src");
  lightImage.setAttribute("src", newSrc);
}