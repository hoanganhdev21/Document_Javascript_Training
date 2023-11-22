// ?page=2&limit=100
// -> sau 1 endpoint sẽ có dấu ? sau dấu chấm hỏi sẽ có param mà chúng ta truyền lên
const imageList = document.querySelector(".images");
const loadmore = document.querySelector(".load-more");
const loading = document.querySelector(".image-loader");
/* `loadmore.style.display = "none";` is setting the CSS `display` property of the `loadmore` element
to `none`, which means that the element will not be displayed on the web page. This is done
initially to hide the "Load More" button until there are more images to load. */
loadmore.style.display = "none";
/* `let page = 1;` is initializing a variable `page` with a value of `1`. This variable is used to keep
track of the current page number when fetching images from the Picsum Photos API. By default, the
initial page number is set to `1`. */
let page = 1;
/* `const limit = 10;` is setting the maximum number of images to be returned in the list when fetching
images from the Picsum Photos API. The value of `limit` is set to `10` in this code, but it can be
changed to any other number. */
const limit = 10;
/* `const endpoint` is a constant variable that stores the URL endpoint for fetching a list of images
from the Picsum Photos API. The `limit` parameter in the URL specifies the maximum number of images
to be returned in the list. The value of `limit` is set to `10` in this code, but it can be changed
to any other number. */
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;
{
  /* <div class="image-item">
        <img src="https://source.unsplash.com/random" alt="" />
      </div> */
}
/**
 * The function creates an HTML template for an image with a given URL and appends it to a container
 * element.
 * @param url - The URL of an image that will be used to create an HTML template for displaying the
 * image on a webpage.
 */
function imageTemplate(url) {
  const template = `<div class="image-item">
        <img src="${url}" alt="" />
      </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}

/**
 * This function fetches images from an API endpoint and displays them on the webpage.
 * @param [page=1] - The page parameter is used to specify the page number of the API response to fetch
 * images from. It is used to paginate through the results of the API endpoint.
 */
async function fetchImages(page = 1) {
  loading.style.display = "block";
  loadmore.style.display = "none";
  /* `const response = await fetch(`&page=`);` is sending a request to the Picsum
  Photos API endpoint with a query parameter `page` that specifies the page number of the API
  response to fetch images from. The `fetch()` method is a built-in method in JavaScript that sends
  a request to a specified URL and returns a promise that resolves to the `Response` object
  representing the response to that request. The `await` keyword is used to wait for the response to
  be returned before continuing with the execution of the code. The `Response` object contains
  information about the response, including the status code, headers, and body. In this case, the
  response body is expected to be in JSON format, which is then parsed using the `json()` method to
  return a JavaScript object. */
  const response = await fetch(`${endpoint}&page=${page}`);
  /* `const images = await response.json();` is sending a request to the API endpoint and waiting for
  the response to be returned in JSON format. The `json()` method is a built-in method in the
  `Response` object that parses the response body as JSON and returns a JavaScript object. The
  returned object is then assigned to the `images` constant variable. */
  const images = await response.json();
  /* This code block is checking if the `images` array returned from the API call is not empty and is
  an actual array. If both conditions are true, it hides the loading spinner by setting the
  `display` property of the `loading` element to `none`, shows the "Load More" button by setting the
  `display` property of the `loadmore` element to `block`, and iterates through each item in the
  `images` array using the `forEach` method to create an HTML template for each image and append it
  to the `imageList` container element using the `imageTemplate` function. */
  if (images.length > 0 && Array.isArray(images)) {
    loading.style.display = "none";
    loadmore.style.display = "block";
    /* `images.forEach((item) => { imageTemplate(item.download_url); });` is iterating through each
    item in the `images` array using the `forEach` method and calling the `imageTemplate` function
    for each item with the `download_url` property of the item as an argument. This creates an HTML
    template for each image and appends it to the `imageList` container element. */
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}
/**
 * The function increments the page number and fetches more images asynchronously.
 */
async function handleLoadMore() {
  page++;
  await fetchImages(page);
}
loadmore.addEventListener("click", handleLoadMore);
fetchImages();
