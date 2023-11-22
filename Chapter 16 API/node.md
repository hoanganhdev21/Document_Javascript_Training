1: https://github.com/typicode/json-server#getting-started
=> Dùng để làm 1 API giả

- Bình thường khi chúng ta làm việc thì API sẽ do back end viết nhưng chúng ta làm việc 1 mình bắt buộc phải dùng API giả.

2: Install JSON Server
npm install -g json-server

3: Create a db.json file with some data
{
"posts": [
{ "id": 1, "title": "json-server", "author": "typicode" }
],
"comments": [
{ "id": 1, "body": "some comment", "postId": 1 }
],
"profile": { "name": "typicode" }
}

4: Start JSON Server
json-server --watch db.json
http://localhost:3000/posts => Get all posts

5: https://jsonplaceholder.typicode.com/guide/

fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
title: 'foo',
body: 'bar',
userId: 1,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));
