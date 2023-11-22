window.addEventListener("load", function () {
  // Variables declaration
  const form = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  /* This line of code is retrieving the value of the "todoList" key from the browser's localStorage
  object and parsing it from a JSON string to a JavaScript object using the `JSON.parse()` method.
  If the value of the "todoList" key is null or undefined (i.e., it doesn't exist in localStorage),
  then an empty array is assigned to the `todos` variable using the logical OR operator (`||`). This
  ensures that `todos` is always an array, even if there are no items saved in localStorage. */
  let todos = JSON.parse(localStorage.getItem("todoList")) || [];
  // console.log("localStorage", localStorage);

  // console.log("todos", todos);
  /* This code block checks if the `todos` array exists and has at least one item in it. If it does, it
  uses the spread operator (`[...todos]`) to create a new array with the same items as `todos`, and
  then iterates over each item in the new array using the `forEach` method. For each item, it calls
  the `createTodoItem` function and passes in the item as an argument. This effectively recreates
  all the todo items that were previously saved in `localStorage` when the page is reloaded. */
  if (Array.isArray(todos) && todos.length > 0) {
    [...todos].forEach((item) => createTodoItem(item));
  }

  //   Function tạo template.
  function createTodoItem(title) {
    const template = `<div class="todo-item">
      <span class="todo-text">${title}</span>
      <i class="fa fa-trash todo-remove"></i>
    </div>`;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  //   ${title} -> Là value cần truyền vào.

  //   Sự kiện submit
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // => Ngăn chặn hành vi mặc định
    const todoVal = this.elements["todo"].value; // => Lấy giá trị của input.
    console.log(todoVal);
    if (!todoVal) return;
    // Main code
    createTodoItem(todoVal); // => gọi function truyền vào title là todoVal(là value chúng ta lấy được từ input).

    // Khi mình bấm submit sẽ tạo ra item đó đồng thời push todoVal vào mảng todos.
    todos.push(todoVal);

    // save to localStorage(lưu vào localStorage):
    // =>Lưu thành mảng
    localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
    this.elements["todo"].value = ""; // => Khi lấy được giá trị rồi thì xoá khỏi input.
  });

  // Handle remove todo
  todoList.addEventListener("click", function (e) {
    if (e.target.matches(".todo-remove")) {
      // remove todo in DOM
      const todo = e.target.parentNode;
      todo.parentNode.removeChild(todo);

      // remove todo in localStorage
      // Dựa vào textcontent.
      const todoText = e.target.previousElementSibling.textContent; // => Lấy nội dung.
      console.log(todoText);
      /* `const index = todos.findIndex((item) => item === todoText);` is finding the index of the todo
      item that needs to be removed from the `todos` array. It uses the `findIndex()` method to
      iterate over each item in the `todos` array and returns the index of the first item that
      satisfies the condition specified in the callback function. In this case, the condition is
      that the `item` in the array is equal to the `todoText` of the clicked todo item. Once the
      index is found, the `splice()` method is used to remove the item from the `todos` array. */
      const index = todos.findIndex((item) => item === todoText);
      //   console.log(index);
      todos.splice(index, 1);
      //   Update lại localStorage:
      localStorage.setItem("todoList", JSON.stringify(todos));
    }
  });
});
