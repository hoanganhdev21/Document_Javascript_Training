//axios: thư viện hỗ trợ gọi API
// http://localhost:3456/posts
/**
 * Post
 * id: 1
 * title: 'This is example of title'
 * description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi repudiandae, animi nesciunt recusandae cumque perferendis corporis facilis amet a tenetur aliquam vel ipsa optio facere saepe nobis ea quasi!'
 * author: 'evondev'
 */

// getPost
// => return list các bài post
// => chỉ quan tâm tới cái propertise data ở trong promise
/**
 * The function retrieves posts data from a server using Axios library in JavaScript.
 */
async function getPosts() {
  // Dùng với asyn await
  //   try {
  //     const response = await axios.get("http://localhost:3000/posts");
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // .then((response) => {
  //   console.log(response.data);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  axios
    .get("http://localhost:3000/posts")
    .then((reponse) => {
      console.log(reponse.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getPosts();

/**
 * The function adds a new post to a server using Axios.
 * @param post - The parameter `post` is an object that contains the properties `title`, `description`,
 * and `author`. These properties represent the data that will be sent in the request body when making
 * a POST request to the specified URL.
 * @returns The function `addPost` is returning a promise that resolves to the response object returned
 * by the `axios.post` method. However, the function itself does not have a return statement, so it
 * will return `undefined` by default.
 */
function addPost(post) {
  return axios
    .post("http://localhost:3000/posts", {
      title: post.title,
      description: post.description,
      author: post.author,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// addPost({
//   title: "Frontend Developer",
//   description: "Description",
//   author: "John",
// });

// Dựa vào id để update
// Khi update sẽ có hai cái đó là put and path
// put -> thay thế luôn trường ở trong database.
// patch -> thay thế những cái mà mình update
/**
 * The function updates a post with a new title and author using Axios.
 * @param postId - postId is a parameter that represents the ID of the post that needs to be updated.
 * It is used in the URL to specify which post to update.
 */
function updatePost(postId) {
  axios
    .patch(`http://localhost:3000/posts/${postId}`, {
      title: "How to become frontend developer",
      author: "Kent",
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// updatePost(1);

// Xoá dựa vào id
/**
 * The function deletes a post with a specific ID using Axios in JavaScript.
 * @param postId - postId is a parameter that represents the unique identifier of a post that needs to
 * be deleted. The function uses Axios to send a DELETE request to the server at the specified URL with
 * the postId as a parameter. If the request is successful, the function logs the response data to the
 * console. If there is
 */
function deletePost(postId) {
  axios
    .delete(`http://localhost:3000/posts/${postId}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// deletePost(2);

// Lấy dữ liệu song song
/**
 * The function retrieves data from two different endpoints and logs the results.
 */
async function getAllData() {
  const data = await axios.all([
    axios.get("http://localhost:3000/posts"),
    axios.get("http://localhost:3000/courses"),
  ]);
  const [posts, courses] = data;
  console.log("getAllData ~ courses", courses);
  console.log("getAllData ~ posts", posts);
}
getAllData();
