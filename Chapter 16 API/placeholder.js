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
// const {image, title, author, rating...addPost.} = course;
const endpoint = "http://localhost:3456/courses";
const courseList = document.querySelector(".course-list");
const formPost = document.querySelector(".form-post");
const formSubmit = document.querySelector(".form-submit");
const filterInput = document.querySelector(".filter");
let updateId = null;

// git clone
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

// TÌM KIẾM
// Khi chúng ta gõ vào input nó sẽ tìm ra những từ khoá ví dụ như tiêu đề thì nó chỉ lấy ra những sản phẩm có từ khoá đó.
/* This code is adding an event listener to the `filterInput` element for the "keydown" event. When the
event is triggered, it calls the `debounceFn` function with a callback function that logs the value
of the input field to the console and sets the `path` variable to the `endpoint` value. If the input
field is not empty, it updates the `path` variable to include a query parameter that searches for
courses with a title that includes the input value. Finally, it calls the `getCourses` function with
the updated `path` value to fetch and render the filtered courses. The `debounceFn` function is used
to limit the frequency of the event listener callback function calls to once every 1000 milliseconds
to prevent excessive API requests. */
filterInput.addEventListener(
  "keydown",
  debounceFn(function (e) {
    console.log(e.target.value);
    /* This code is updating the `path` variable based on the value of the `filterInput` element. If
    the input value is not empty, it updates the `path` variable to include a query parameter that
    searches for courses with a title that includes the input value. This updated `path` variable is
    then used as the endpoint for the `getCourses` function to fetch and render the filtered
    courses. */
    let path = endpoint;
    if (e.target.value !== "") {
      path = `${endpoint}?title_like=${e.target.value}`;
      //   ? title_like= tìm theo tiêu đề.
    }
    getCourses(path);

    //   const response = await fetch(`${endpoint}?title_like=${e.target.value}`);
    //   const data = await response.json();
    //   console.log(data);
  }, 1000)
);

async function addNewCourse({
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  await fetch(endpoint, {
    method: "POST",
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
  });
}

// DELETE
// Xoá course khỏi database
// => chúng ta phải dựa vào id
async function deleteCourse(id) {
  await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  });
}

// LẤY RA THÔNG TIN KHI UPDATE
async function getSingleCourse(id) {
  const response = await fetch(`${endpoint}/${id}`);
  const data = await response.json();
  return data;
}

// Render item trong course-list
/**
 * The function `renderItem` takes an item object and generates HTML code to display the item's
 * information in a course list.
 * @param item - The item parameter is an object that contains information about a course, such as its
 * title, author, image, rating, buy amount, and whether it is a best seller or not. The function uses
 * this information to dynamically generate HTML code for displaying the course on a web page.
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
      <div class="course-rating">Rating: ${item.rating}</div>
      <div class="course-enroll">Buy amount: ${item.buyAmount}</div>
    </div>
    ${
      item.bestSeller ? '<div class="course-best-seller">Best seller</div>' : ""
    }
  </div>`;
  courseList.insertAdjacentHTML("beforeend", template);
}

// LẤY RA KHOÁ HỌC.
async function getCourses(link = endpoint) {
  const response = await fetch(link);
  const data = await response.json();
  courseList.innerHTML = ""; // => Reset rỗng cái ban đầu sau đó chúng ra mới render ra cái mới.
  if (data.length > 0 && Array.isArray(data)) {
    data.forEach((item) => renderItem(item));
  }
}

formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
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
  /* This code is creating an object called `course` with properties that correspond to the values of
  the input fields in the `formPost` form. The `+` operator is used to convert the values of the
  `rating`, `price`, and `buyAmount` properties from strings to numbers. This object is then passed
  as an argument to the `addNewCourse` or `updateCourse` function to add or update a course in the
  database. */
  const course = {
    /* `title: this.elements["title"].value` is creating a property called `title` in an object literal
    and assigning it the value of the `value` property of the `title` input element in the
    `formPost` form. This is used to collect the user input for the title of a new course or the
    updated title of an existing course. */
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: +this.elements["rating"].value,
    price: +this.elements["price"].value,
    image: this.elements["image"].value,
    bestSeller: this.elements["bestSeller"].checked,
    buyAmount: +this.elements["buyAmount"].value,
    // + -> để chuyển sang number
  };
  console.log(updateId);
  //   addPost(image, title, author, rating, price, bestSeller, buyAmount);

  //   await addNewCourses(course); // => addPost(course) chờ thêm khoá học xong rồi mới reset thì dùng async await.

  //   Kiểm tra:
  //   Nếu có updateID thì có updateCourse object{id, ...course(...là destrucuring sang object)}, còn ngược lại thì sẽ thêm khoá học mới
  /* This code is checking whether the `updateId` variable has a truthy value. If it does, it means
  that the user is updating an existing course, so the `updateCourse` function is called with an
  object that includes the `id` property set to the value of `updateId`, and the rest of the
  properties spread from the `course` object. If `updateId` is falsy, it means that the user is
  adding a new course, so the `addNewCourse` function is called with the `course` object. After the
  course is added or updated, the form is reset to its initial state. */
  updateId
    ? await updateCourse({ id: updateId, ...course })
    : await addNewCourse(course);
  // reset vale form
  /* `this.reset();` is resetting the form to its initial state by clearing all the input fields and
  resetting any default values or selected options. This is typically used after a form has been
  submitted to clear the form and prepare it for the next input. */
  this.reset();
  // Xử lý khi add sẽ hiện ra bên ngoài trình duyệt luôn mà không cần phải reload
  await getCourses(); // => Khi bấm add thì nó sẽ gọi lại getCourse
  // Sau khi update và clear form và gọi lại xong rồi luvs này mình sẽ gán lại.
  updateId = null;
  formSubmit.textContent = "Add course";
});

courseList.addEventListener("click", async function (e) {
  /* The code is handling click events on elements with the class "course-remove" and "course-edit". If
  the clicked element has the "course-remove" class, it retrieves the ID of the corresponding course
  from the "data-id" attribute of the element, deletes the course from the database using the ID,
  and then re-renders the list of courses. If the clicked element has the "course-edit" class, it
  retrieves the ID of the corresponding course from the "data-id" attribute of the element,
  retrieves the information about the course from the database using the ID, and then pre-f */
  if (e.target.matches(".course-remove")) {
    /* `const id = +e.target.dataset.id;` is converting the value of the `id` attribute of the clicked
    element to a number using the unary plus operator (`+`). The `id` value is stored in the
    `data-id` attribute of the clicked element, which is accessed using the `dataset` property. This
    converted `id` value is then used as an argument for the `deleteCourse` or `getSingleCourse`
    function to delete or retrieve information about a specific course from the database. */
    const id = +e.target.dataset.id;
    // console.log(e.target);
    await deleteCourse(id);
    // Sau khi xoá khoá học xong sẽ render lại.
    await getCourses();
  } else if (e.target.matches(".course-edit")) {
    const id = +e.target.dataset.id;
    // console.log(id);
    const data = await getSingleCourse(id);
    // Lấy giá trị của data lên các input tương ứng khi update.
    /* `formPost.elements["image"].value = data.image;` is setting the value of the "image" input field
    in the "formPost" form to the value of the "image" property of the "data" object. This is used
    to pre-fill the input fields with the existing data of a course when the user clicks on the
    "edit" button to update the course information. */
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
/* The above code is calling a function named `getCourses()`. It is not clear what this function does
without further context. */
getCourses();

// json-server --watch db.json
/**
 * Course
 * image
 * title
 * author
 * rating
 * price
 * bestSeller
 * buyAmount
 */
