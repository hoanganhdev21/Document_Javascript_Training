// MVC: -> Model View Controler.
// Model: Xử lý chức năng về logic.
// View: Những cái hiển thị ngoài giao diện
// Controler: Gắn kết giữa View and Model, thực hiện những cái liên quan đến user.
class Model {
  /**
   * This constructor initializes a list of todos by either retrieving it from local storage or
   * creating an empty list.
   */
  constructor() {
    // Chứa danh sách các todos mà chúng ta sẽ add vào.
    /* The above code is setting the value of the `todos` property to an array of objects that are
    parsed from the `todoList` key in the browser's `localStorage`. If the `todoList` key does not
    exist in the `localStorage`, it sets the `todos` property to an empty array. */
    this.todos = JSON.parse(localStorage.getItem("todoList")) || [];
  }

  /**
   * The function sets a handler for when the todo list changes.
   * @param handler - The "handler" parameter is a function that will be called when the todo list
   * changes. It is used to update the view with the new list of todos.
   */

  // Mỗi lần thêm xoá sửa sẽ cập nhật lại và thay đổi bên ngoài giao diện.
  handleTodoChange(handler) {
    this.todoListChange = handler;
    // handleTodoChange = (todos) => {
    //   this.view.displayTodos(todos);
    // };
  }

  /**
   * The function updates the todo list and saves it to local storage.
   * @param todos - The parameter "todos" is likely an array of objects representing a list of to-do
   * items. The function "_reload" takes this array as an argument and updates the UI to reflect any
   * changes made to the list. It also saves the updated list to local storage using the "setItem"
   * method of the
   */
  _reload(todos) {
    this.todoListChange(todos);
    localStorage.setItem("todoList", JSON.stringify(todos));
  }

  // Thêm todos
  /**
   * The function adds a new todo item to an array of todos and reloads the list.
   * @param todoText - A string representing the text of a new todo item to be added to the list.
   */
  addTodo(todoText) {
    /* It checks if the length of the `todoText` string is greater than 0 (i.e., if it is not an empty
    string). If it is not empty, it adds the `todoText` string to the `todos` array in the `Model`
    class. */
    if (todoText.length > 0) {
      this.todos.push(todoText);
    }
    this._reload(this.todos);
  }

  // Xoá todos
  /**
   * This function removes a todo item from an array of todos and reloads the updated array.
   * @param todoText - A string representing the text of the todo item that needs to be removed from
   * the `todos` array.
   */
  removeTodo(todoText) {
    /* `const index = this.todos.findIndex((item) => item === todoText);` is finding the index of the
    todo item that matches the `todoText` parameter in the `todos` array of the `Model` class. It
    uses the `findIndex()` method to search for the first element in the array that satisfies the
    provided testing function, which in this case is a function that checks if the `item` parameter
    is equal to the `todoText` parameter. If a matching element is found, the method returns its
    index in the array. If no matching element is found, the method returns -1. The returned index
    is then stored in the `index` constant for later use in removing the todo item from the array. */
    const index = this.todos.findIndex((item) => item === todoText);
    /* `this.todos.splice(index, 1)` is removing one element from the `todos` array at the specified
    `index`. The `splice()` method changes the contents of an array by removing or replacing
    existing elements and/or adding new elements. In this case, it is removing the todo item at the
    specified index from the `todos` array. */
    this.todos.splice(index, 1);
    /* `this._reload(this.todos);` is calling the `_reload` method of the `Model` class with the
    current `todos` array as its argument. The `_reload` method updates the `todoListChange` handler
    with the new `todos` array and also updates the `localStorage` with the new `todos` array. */
    this._reload(this.todos);
  }
}

class View {
  /**
   * This function creates a to-do list with an input form and a list container.
   */
  constructor() {
    this.app = this.getElement("body");

    this.todoWrapper = this.createElement("div", "todo");
    this.form = this.createElement("form", "todo-form");
    this.form.autocomplete = "off";

    this.input = this.createElement("input", "todo-input");
    this.input.type = "text";
    this.input.placeholder = "Enter your task";
    this.input.name = "todo";

    this.submit = this.createElement("button", "todo-submit");
    this.submit.type = "submit";
    this.submit.textContent = "Add";

    this.form.append(this.input, this.submit);

    this.todoList = this.createElement("div", "todo-list");
    this.todoWrapper.append(this.form, this.todoList);
    this.app.append(this.todoWrapper);
  }

  // createElement: Tạo ra element chúng ta muốn.
  /**
   * This function creates a new HTML element with an optional class name.
   * @param tag - The HTML tag name of the element to be created, such as "div", "p", "span", etc.
   * @param className - The className parameter is a string that represents the CSS class name(s) to be
   * added to the newly created element. If no class name is provided, the function will simply create
   * the element without any class.
   * @returns a newly created HTML element with the specified tag and optional class name.
   */
  createElement(tag, className) {
    const elm = document.createElement(tag);
    if (className) elm.classList.add(className);
    return elm;
  }

  // getElement: truy vấn 1 element nào đó.
  /**
   * The function returns the first element in the document that matches the given selector.
   * @param selector - The selector parameter is a string that represents a CSS selector used to
   * identify the HTML element to be retrieved from the DOM. It can be a class, ID, tag name, or any
   * other valid CSS selector.
   * @returns The function `getElement(selector)` returns the first element in the document that
   * matches the specified selector.
   */
  getElement(selector) {
    const elm = document.querySelector(selector);
    return elm;
  }

  // Private riêng tư chỉ sử dụng trong class này thôi.
  // => Dùng dấu _....
  get _todoValue() {
    // Trả về value của input
    return this.input.value;
  }

  // Reset value
  _resetValue() {
    this.input.value = "";
  }

  // phương thức hiển thị:
  /**
   * This function displays a list of todos and allows the user to remove them.
   * @param todos - an array of todo items that need to be displayed on the webpage. The function
   * removes any existing todo items from the webpage and then creates new HTML elements for each todo
   * item in the array, including a text span and a trash icon. The function then appends these
   * elements to the todo list on the
   */
  displayTodos(todos) {
    /* This code block is removing all child elements of the `todoList` element on the webpage. It is
    used to clear the existing todo items from the view before displaying a new list of todo items. */
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }
    /* This code block is checking if the `todos` array has at least one item. If it does, it loops
    through each item in the array and creates a new HTML element for each item. The new element is
    a `div` with the class name `todo-item`, which contains a `span` element with the class name
    `todo-text` and the text content of the current todo item. It also contains an `i` element with
    the class name `fa fa-trash todo-remove` and a `data-value` attribute set to the value of the
    current todo item. Finally, the new `div` element is appended to the `todoList` element on the
    webpage. */
    if (todos.length > 0) {
      todos.forEach((todoText) => {
        const todoItem = this.createElement("div", "todo-item");
        const span = this.createElement("span", "todo-text");
        span.textContent = todoText;
        const icon = this.createElement("i");
        icon.className = "fa fa-trash todo-remove";
        icon.setAttribute("data-value", todoText);

        todoItem.append(span, icon);

        this.todoList.append(todoItem);
      });
    }
  }

  // Phương thức thêm:
  /**
   * This function adds an event listener to a form and calls a handler function with the value of the
   * form input when the form is submitted.
   * @param handler - The `handler` parameter is a function that will be called when the form is
   * submitted with a valid todo value. It takes the todo value as its argument and is responsible for
   * adding the todo to the application's data model and updating the view accordingly.
   */
  viewAddTodo(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      /* This code block is checking if the `_todoValue` property of the `View` class is not empty. If
      it is not empty, it calls the `handler` function with the value of `_todoValue` as its
      argument and then resets the value of the input field to an empty string using the
      `_resetValue` method. This code is used to add a new todo item to the application's data model
      and update the view accordingly. */
      if (this._todoValue) {
        handler(this._todoValue);
        this._resetValue();
      }
    });
  }

  // Phương thức xoá.
  /**
   * This function removes a todo item from the todo list and calls a handler function with the removed
   * item's value.
   * @param handler - The `handler` parameter is a function that will be called when a todo item is
   * removed from the list. It takes one argument, which is the value of the todo item that was
   * removed. This function is passed as an argument to the `viewRemoveTodo` method, which is
   * responsible for removing
   */
  viewRemoveTodo(handler) {
    this.todoList.addEventListener("click", (e) => {
      /* This code block is checking if the clicked element matches the CSS selector ".todo-remove". If
      it does, it removes the parent node of the clicked element (which is the todo item) from the
      DOM and calls the `handler` function with the value of the `data-value` attribute of the
      clicked element. This is used to remove the corresponding todo item from the model. */
      if (e.target.matches(".todo-remove")) {
        const todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);
        const value = e.target.dataset.value;
        handler(value);
      }
    });
  }
}

class Controller {
  /**
   * This is a constructor function that initializes a model and view, registers event listeners for
   * adding and removing todos, and handles changes to the todo list.
   * @param model - The model parameter is an object that represents the data and logic of the
   * application. It contains methods for adding, removing, and updating todos, as well as properties
   * that store the current state of the todos.
   * @param view - The view parameter is an object that represents the user interface of the
   * application. It contains methods for displaying and updating the todo list on the screen, as well
   * as handling user input.
   */
  constructor(model, view) {
    /* The above code is defining two properties `model` and `view` on the `this` object. The values of
    these properties are being set to the values of the `model` and `view` variables respectively. */
    this.model = model;
    this.view = view;
    // this.model.addTodo("Tran anh tuan");
    // this.view.displayTodos(this.model.todos);
    /* The above code is registering event listeners for the following actions: */
    this.model.handleTodoChange(this.handleTodoChange);
    this.view.viewAddTodo(this.handleAddTodo);
    this.view.viewRemoveTodo(this.handleRemoveTodo);

    // this.handleTodoChange(this.model.todos);
  }

  /* `handleTodoChange` is a method in the `Controller` class that takes an array of todos as its
  argument and updates the view by calling the `displayTodos` method of the `View` class with the
  `todos` array as its argument. The method is defined using an arrow function expression and is
  assigned to the `handleTodoChange` property of the `Controller` instance. This allows the method
  to be passed as a callback function to the `handleTodoChange` method of the `Model` class, which
  is responsible for updating the list of todos and triggering the callback function to update the
  view. */
  // Mỗi lần thêm xoá sửa sẽ thay đổi giao diện ngoài DOM.
  handleTodoChange = (todos) => {
    this.view.displayTodos(todos);
  };

  /* `handleAddTodo` is a method in the `Controller` class that takes a `todoText` parameter and calls
  the `addTodo` method of the `Model` class with the `todoText` parameter as its argument. This
  method is defined using an arrow function expression and is assigned to the `handleAddTodo`
  property of the `Controller` instance. This allows the method to be passed as a callback function
  to the `viewAddTodo` method of the `View` class, which is responsible for adding a new todo item
  to the application's data model and updating the view accordingly. */
  handleAddTodo = (todoText) => {
    this.model.addTodo(todoText);
  };

  /* The above code defines a function called `handleRemoveTodo` that takes in a parameter `todoText`.
  Within the function, it calls a method `removeTodo` on an object called `model`, passing in the
  `todoText` parameter as an argument. The purpose of this function is to remove a todo item from
  the model. */
  handleRemoveTodo = (todoText) => {
    this.model.removeTodo(todoText);
  };
}

/* The above code is creating a new instance of a Controller class, passing in a new instance of a
Model class and a new instance of a View class as arguments. This is likely part of a larger
JavaScript application that follows the Model-View-Controller (MVC) design pattern. */
const app = new Controller(new Model(), new View());
