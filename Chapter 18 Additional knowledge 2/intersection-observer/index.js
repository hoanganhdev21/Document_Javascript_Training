// Sẽ thấy khi sử dụng những thư viện animate khi scroll thì cái hình mới hiện ra
if ("IntersectionObserver" in window) {
  // const boxed = document.querySelector(".boxed");
  // function callback(entries) {
  //   const entry = entries[0];
  //   if (entry.isIntersecting) {
  //     observer.unobserve(entry.target);
  //     entry.target.style.backgroundColor = "red";
  //   }
  // }
  // const options = {
  //   root: null,
  //   threshold: 0.5,
  //   rootMargin: "0px",
  // };
  // const observer = new IntersectionObserver(callback, options);
  // observer.observe(boxed);
  /* `const options` is creating an object that sets the options for the `IntersectionObserver`. In
  this case, the `threshold` property is set to `0.5`, which means that the observer will trigger
  when the target element is 50% visible in the viewport. This can be adjusted to a different value
  depending on the desired behavior. */
  const options = {
    threshold: 0.5,
  };
  /* This code is creating a new `IntersectionObserver` object and setting it to the variable
  `observer`. The observer is set up to watch for when elements on the page intersect with the
  viewport, and when they do, it will execute the callback function provided as the first argument. */
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      /* This code block is checking if the observed element has intersected with the viewport using
      the `isIntersecting` property of the `entry` object. If it has, it sets the `src` attribute of
      the element to the value of its `data-src` attribute, which is typically a higher resolution
      image that is not loaded initially to improve page performance. After that, it calls the
      `unobserve()` method on the `observer` object to stop observing the element, since it has
      already been loaded. */
      if (entry.isIntersecting) {
        // Handle logic here
        entry.target.src = entry.target.dataset.src;
        // observer.unobserve(entry.target)
        observer.unobserve(entry.target);
      }
    });
  }, options);
  /* This code is using the `document.querySelectorAll()` method to select all the `<img>` elements on
  the page. Then, it is using the `forEach()` method to loop through each of these `<img>` elements
  and calling the `observer.observe()` method on each of them. This is setting up an
  IntersectionObserver to watch for when each `<img>` element enters the viewport, and when it does,
  it will load the image by setting the `src` attribute to the value of the `data-src` attribute.
  This technique is commonly used for lazy loading images to improve page performance. */
  const images = document.querySelectorAll("img");
  images.forEach((img) => observer.observe(img));
}
