// https://icanhazdadjoke.com/ -> đây là 1 API free chúng ta có thể sử dụng nó
// joke -> có nghĩa là những câu nói hài hước khi mà mỗi lafn chúng ta gọi thì nó ra một câu hài hước
const jokeHeding = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const jokeWrapper = document.querySelector(".joke");
const endpoint = "https://icanhazdadjoke.com/";
/**
 * This function retrieves a joke from an API in JSON format.
 * @returns The function `getJoke()` is returning a Promise that resolves to the JSON data fetched from
 * the specified endpoint.
 */
async function getJoke() {
  /* `const response = await fetch(endpoint, {headers: {Accept: "application/json"}});` is making a
  request to the specified `endpoint` URL using the `fetch()` method. The `headers` object is
  specifying that the response should be in JSON format by setting the `Accept` header to
  `"application/json"`. The `await` keyword is used to wait for the response to be returned before
  continuing with the code execution. The response is then assigned to the `response` variable. */
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
    },
    // headers thông tin mà chúng muốn gửi lên server để server nhận những thông tin đó để nó trả về cho chúng ta 1 cách phù hợp.
  });
  /* `const data = await response.json();` is converting the response from the API into JSON format and
  assigning it to the `data` variable. This allows us to easily access the data returned by the API
  in a structured format. */
  const data = await response.json();
  return data;
}
/**
 * This function handles a click event, retrieves a joke asynchronously, updates the joke heading with
 * the retrieved joke, and removes a loading class from the joke wrapper.
 */
async function handleClick() {
  jokeWrapper.classList.add("is-loading");
  const data = await getJoke();
  jokeHeding.textContent = data.joke;
  jokeWrapper.classList.remove("is-loading");
}
jokeButton.addEventListener("click", handleClick);
