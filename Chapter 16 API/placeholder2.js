// function addPost(title, author) {
//   fetch("http://localhost:3000/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       // body: JSON.stringify data chúng ta sẽ truyền vào
//       title,
//       author,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// const formPost = document.querySelector(".form-post");
// formPost.addEventListener("submit", function (event) {
//   event.preventDefault();
//   // Lấy giá trị trong form.
//   const title = this.elements["title"].value;
//   const author = this.elements["author"].value;
//   //   console.log(title, author);
//   addPost(title, author);
// });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Placeholder về course
const formPost = document.querySelector(".form-post");
const courseList = document.querySelector(".course-list");
const formSubmit = document.querySelector(".form-submit");
const filterInput = document.querySelector(".filter");
let updateId = null;

const endpoint = "http://localhost:3456/courses";

async function addNewCourses({
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  byAmount,
  // truyền vào là 1 object để khi chúng ta truyền sai thứ tự nó vẫn chạy đúng.
}) {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      // body: JSON.stringify data chúng ta sẽ truyền vào
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      byAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// delete
// Xoá course khỏi database
// => chúng ta phải dựa vào id
async function deleteCourse(id) {
  await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  });
}

// Update
// Tương tự như post thay vì method là post thì sẽ là put.
// Nhưng khi update chúng ta phải biết update cho cái id nào.
async function updateCourse({
  id,
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  await fetch(`${endpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// filterInput.addEventListener(
//   "keydown",
//   debounceFn(function (e) {
//     let path = endpoint;
//     if (e.target.value !== "") {
//       path = `${endpoint}?title_like=${e.target.value}`;
//     }
//     getCourses(path);
//   }, 500)
// );

/**
 * The function retrieves data for a single course from an API endpoint using its ID.
 * @param id - The parameter "id" is a unique identifier for a specific course that is being requested
 * from the API. It is used to construct the URL endpoint for the API request.
 * @returns The function `getSingleCourse` is returning the data fetched from the API endpoint for a
 * single course with the specified `id`. The data is returned as a Promise that resolves to the JSON
 * representation of the course.
 */
// Lấy thông tin khi sửa:
async function getSingleCourse(id) {
  const response = await fetch(`${endpoint}/${id}`);
  const data = await response.json();
  return data;
}

// Render item trong list-course
/**
 * The function `renderItem` takes an item object and generates HTML code to display the item's
 * information in a course list.
 * @param item - The item parameter is an object that contains information about a course, such as its
 * title, author, image, rating, buyAmount, and whether it is a best seller or not. The function uses
 * this information to generate HTML code for displaying the course on a web page.
 */
function renderItem(item) {
  const template = `<div class="course-item">
    <div class="course-image">
      <img src="${item.image}" alt="" />
      <button class="course-edit" data-id="${
        item.id
      }"><i class="fa fa-pencil" style="pointer-events: none;"></i></button>
      <button class="course-remove" data-id="${
        item.id
      }"><i class="fa fa-times"></i></button>
    </div>
    <div class="course-content">
      <h3 class="course-title">
        ${item.title}
      </h3>
      <div class="course-author">${item.author}</div>
      <div class="course-meta">
        <div class="course-rating">${item.rating}</div>
        <div class="course-enroll">${item.buyAmount}</div>
      </div>
      ${
        item.bestSeller
          ? '<div class="course-best-seller">Best seller</div>'
          : ""
      }
    </div>`;
  courseList.insertAdjacentHTML("beforeend", template);
}

// Lấy ra khoá học
/**
 * This function fetches data from an API endpoint, converts it to JSON format, clears the HTML content
 * of a specified element, and then iterates through the data to render each item.
 * @param [link] - The link parameter is a string representing the endpoint URL for fetching data. If
 * no value is provided, it defaults to the value of the endpoint variable.
 */
async function getCourses(link = endpoint) {
  const response = await fetch(link);
  const data = await response.json();
  /* `const data = await response.json();` is fetching the response from the API endpoint and
  converting it to JSON format. The `await` keyword is used to wait for the response to be returned
  before assigning it to the `data` variable. This allows us to work with the data in a more
  convenient format, such as an array of objects, rather than as a raw string. */
  courseList.innerHTML = ""; // => Reset rỗng cái ban đầu sau đó chúng ra mới render ra cái mới.
  /* This code block checks if the `data` array is not empty and is an actual array using
  `Array.isArray(data)`. If both conditions are true, it iterates through each item in the `data`
  array using `forEach()` and calls the `renderItem()` function to generate HTML code for displaying
  each course item on the web page. */
  if (data.length > 0 && Array.isArray(data)) {
    data.forEach((item) => renderItem(item));
  }
}

formPost.addEventListener("submit", async function (event) {
  event.preventDefault();
  // Lấy giá trị trong form.
  //   Truyền khi đúng thứ tự
  //   const image = this.elements["image"].value;
  //   const title = this.elements["title"].value;
  //   const author = this.elements["author"].value;
  //   const rating = this.elements["rating"].value;
  //   const price = this.elements["price"].value;
  //   const bestSeller = this.elements["bestSeller"].checked;
  //   const buyAmount = this.elements["buyAmount"].value;
  // Lấy giá trị không cần đúng thứ tự
  const course = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: +this.elements["rating"].value,
    price: +this.elements["price"].value,
    bestSeller: this.elements["bestSeller"].checked,
    byAmount: +this.elements["buyAmount"].value,
    // + -> để chuyển sang number
  };
  //   addPost(image, title, author, rating, price, bestSeller, buyAmount);

  //   await addNewCourses(course); // => addPost(course) chờ thêm khoá học xong rồi mới reset thì dùng async await

  //   Kiểm tra:
  //   Nếu có updateID thì có updateCourse object{id, ...course(...là destrucuring sang object)}, còn ngược lại thì sẽ thêm khoá học mới
  updateId
    ? await updateCourse({ id: updateId, ...course })
    : await addNewCourses(course);

  //   reset value form
  this.reset();

  // Xử lý khi add sẽ hiện ra bên ngoài trình duyệt luôn mà không cần phải reload
  await getCourses(); // => Khi bấm add thì nó sẽ gọi lại getCourse

  //   Sau khi update và clear form và gọi lại xong rồi luvs này mình sẽ gán lại.
  updateId = null;
  formSubmit.textContent = "Add course";
});

courseList.addEventListener("click", async function (e) {
  if (e.target.matches(".course-remove")) {
    // console.log(e.target);\
    const id = e.target.dataset.id;
    await deleteCourse(id);
    // Sau khi xoá khoá học xong sẽ render lại:
    await getCourses();
  } else if (e.target.matches(".course-edit")) {
    const id = +e.target.dataset.id;
    // console.log(id);
    const data = await getSingleCourse(id);
    // Lấy giá trị của data lên các input tương ứng khi update.
    formPost.elements["image"].value = data.image;
    formPost.elements["title"].value = data.title;
    formPost.elements["author"].value = data.author;
    formPost.elements["rating"].value = data.rating;
    formPost.elements["price"].value = data.price;
    formPost.elements["bestSeller"].checked = data.bestSeller;
    formPost.elements["buyAmount"].value = data.buyAmount;
    formSubmit.textContent = "Update course"; // => set lại text cho button
    updateId = id; // => update lại id đó
  }
});
getCourses();
