function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const header = document.querySelector(".header");
const headerHeight = header && header.offsetHeight;
// console.log(headerHeight);
// Sự kiện scroll
window.addEventListener(
  "scroll",
  debounceFn(function (e) {
    const scrollY = window.pageYOffset; //=> Kiểm tra xem chúng ta scroll tới đâu.
    console.log(scrollY);
    if (scrollY >= headerHeight) {
      header && header.classList.add("is-fixed");
      //   document.body.classList.add("has-space");
      document.body.style.paddingTop = `${headerHeight}px`;
      // if (header) {
      //   header.classList.add("is-fixed");
      // }
    } else {
      header && header.classList.remove("is-fixed");
      //   document.body.classList.remove("has-space");
      document.body.style.paddingTop = 0;

      // if (header) {
      //   header.classList.remove("is-fixed");
      // }
    }
  }, 200)
);
