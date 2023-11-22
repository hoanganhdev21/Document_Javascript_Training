// API là gì
// Application Programming Interface
// => API nó giống như 1 server có data và trả về cho chúng ta.
// API (Giao diện lập trình ứng dụng) là một tập hợp các tính năng và quy tắc tồn tại bên trong chương trình phần mềm (ứng dụng) cho phép tương tác với nó thông qua phần mềm - trái ngược với giao diện người dùng của con người. API có thể được coi là một hợp đồng đơn giản (giao diện) giữa ứng dụng cung cấp nó và các mục khác, chẳng hạn như phần mềm hoặc phần cứng của bên thứ ba.

// https://api.github.com/users/evondev -> API của github và truyền vào là username là evondev.
// => Lấy data này để hiển thị ra bên ngoài giao diện hocajw thực hiện 1 chức năng nào đó.
// JSON.parse(data) -> data trả về dưới dạng JSON.

// VD: Sử dụng API github để lấy thông tin của user.
const endpoint = "https://api.github.com/users/evondev"; // -> endpoint là 1 trong những đường dẫn của API.

// fetch: -> có sẵn ở trong JS dùng để fetch data từ endpoint nó sẽ trả về cho chúng ta 1 promise và sau đó chúngta có thể sử dụng then và catch để bắt lỗi.
// fetch basic
// const promise = fetch(endpoint);
// console.log(promise);
// promise
//   .then((respone) => {
//     return respone.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.type);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch
// refactor thành function để chúng ta có thể truyền param vào thay username không phải là evondev mà là một tên khác.
// => chúng ta chỉ cần quan tâm respone và json(data nó sẽ nàm ở trong đây).
const endpoint2 = "https://api.github.com/users"; // -> endpoint là 1 trong những đường dẫn của API.
const userEl = document.querySelector(".username");
/**
 * The function displays the username of a user fetched from an API endpoint.
 * @param username - The username parameter is a string that represents the username of a user on a
 * website or application. It is used in the fetch request to retrieve data about the user from an API.
 */
async function displayUser(username) {
  userEl.textContent = "Loading..."; // -> Trước khi mà fetch chúng ta cho loading hiện ra trước
  /* `const promise = await fetch(`/`);` is making a fetch request to the API
  endpoint with the specified username parameter. The `await` keyword is used to wait for the
  response from the API before continuing with the execution of the code. The response is returned
  as a promise, which is assigned to the `promise` constant. */
  const promise = await fetch(`${endpoint2}/${username}`);
  console.log(promise);
  /* `const data = await promise.json();` is waiting for the response from the API endpoint to be
  returned as a JSON object. It is using the `json()` method to parse the response data as JSON and
  assign it to the `data` variable. This allows us to access and use the data in our code. */
  const data = await promise.json(); // -> cái này tương ứng với đoạn ở dưới
  //   .then((data) => {
  //     console.log(data);
  //     console.log(data.type);
  //   })
  /* `userEl.textContent = `${data.login}`;` is setting the text content of the HTML element with class
  "username" to the login name of the user fetched from the API. This is a way to display the
  username on the webpage. */
  userEl.textContent = `${data.login}`;
}
/**
 * The function logs an error message and updates the text content of a user element.
 */
function handleError() {
  console.log("Something wrong with your api");
  userEl.textContent = "No data found";
}
// console.log(displayUser("evondev"));
/* `displayUser("").catch(handleError)` is calling the `displayUser` function with an empty string as
the `username` parameter, which will result in an error being thrown when the fetch request is made.
The `catch` method is used to handle any errors that occur during the execution of the `displayUser`
function, and it calls the `handleError` function to log an error message and update the text
content of the `userEl` element to "No data found". */
displayUser("").catch(handleError);
