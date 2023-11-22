// +++++
// execution context:
// => Khi mà nó thực thi đoạn code này ở trên web
/**
 * The function "timesTen" multiplies its input by 10 and returns the result.
 * @param a - a is a parameter of the function timesTen, which represents the input value that will be
 * multiplied by 10 and returned as the output of the function. In the given code, the value of x
 * (which is 10) is passed as an argument to the function, so a will have the
 * @returns The function `timesTen` is returning the value of the input parameter `a` multiplied by 10.
 * In this case, `x` is passed as the input parameter, so the function returns `10 * 10`, which is
 * `100`. This value is then assigned to the variable `y` and printed to the console using
 * `console.log(y)`.
 */
let x = 10;
function timesTen(a) {
  return a * 10;
}
let y = timesTen(x);
console.log(y); // 100

// +++
// Global execution context:
// the creation phase
/**
 * Global object: window
 * this: window
 * x: undefined
 * timesTen: function(){}
 * y: undefined
 */
// the execution phase
/**
 * Global object: window
 * this: window
 * x: 10
 * timesTen: function(){}
 * y: timesTen(x) -> 100
 */

// +++
// Function execution context:
// creation phase
/**
 * Global object: arguments
 * this: window
 * a: undefined
 */
// execution phase
/**
 * Global object: arguments
 * this: window
 * a: 10
 */

// ======================================================================
// +++++
// CallStack:
// => Dùng để quản lý execution context.
/**
 * The function calculates the average of two numbers by adding them and dividing the sum by 2.
 * @param a - 10
 * @param b - The parameter "b" in the above code refers to the second number that is passed as an
 * argument to the "add" and "average" functions. In the example given, the value of "b" is 20.
 * @returns The value of `result`, which is the average of 10 and 20, which is 15.
 */
function add(a, b) {
  return a + b;
}
function average(a, b) {
  return add(a, b) / 2;
}
let result = average(10, 20);
/**
 * add() -> chạy cuối cùng
 * average() -> chạy tiếp theo
 * global() -> chạy đầu tiên
 */
// result
/**
 * average() -> chạy cuối cùng
 * global() -> chạy đầu tiên
 */
/**
 * global()
 */
/**
 */

// ======================================================================
// +++++
// event loop:
// => single thread(Xử lý đơn luồng).
// Tại 1 thời điểm nó chỉ thực hiện được 1 chức năng.
/**
 * The function performs a loop and logs a message to the console.
 * @param message - The message parameter is a string that will be logged to the console after the
 * while loop has finished executing.
 */
function task(message) {
  let number = 10000000;
  while (number > 0) {
    number--;
  }
  console.log(message);
}
console.log("Start");
task("Loading");
console.log("End");

// main => nó sẽ chạy đồng bộ từ trên xuống sau đó nó sẽ chạy vào console.log("Start") và nó sẽ chạy vào task("Loadding")-> và nó bị blocking script(vì nó phải chờ vòng lặp chạy xong) ở chỗ này không cho chạy tới console.log("End").
// Để xử lý vấn đề trên chúng ta sử dụng callback.
// Call stack
/**
 * Start ->
 * task ->
 * End ->
 */

// ======================================================================
// +++++
// callback:
// => Là 1 function nằm ở trong function khác.
/* This code is demonstrating the concept of callback and event loop in JavaScript. It first logs
"Start" to the console, then sets a timeout of 2 seconds using the `setTimeout` function. Inside the
callback function passed to `setTimeout`, it calls the `task` function with the argument "Loading".
Since `setTimeout` is a Web API, it is executed outside of the main thread and is added to the
callback queue after the specified time has passed. Meanwhile, the main thread continues to execute
and logs "End" to the console. When the call stack is empty, the event loop checks the callback
queue and moves the callback function from `setTimeout` to the call stack, where it is executed and
logs "Loading" to the console. */
console.log("Start");
// Start ->
setTimeout(() => {
  task("Loading");
}, 2000);
// Rời khỏi callstack và chạy qua Web APIs -> Callback queue -> Khi callstack empty -> chạy xong -> rời khỏi callstack
console.log("End"); // chạy xong và rời khỏi call stack
// Web APIs: setTimeout, fetch request, DOM Event

// ======================================================================
// +++++
// callback-hell:
// => Là callback lồng vào nhau.
/* The code is demonstrating the concept of callback and event loop in JavaScript. It uses nested
`setTimeout` functions to create a sequence of delayed console logs. Each `setTimeout` function is
executed after a specified delay, and when it finishes, it calls the next `setTimeout` function in
the sequence. This creates a chain of callbacks that are executed one after the other, with a delay
between each one. The result is a series of console logs that are printed to the console at
different times, creating a delayed effect. This pattern is often referred to as "callback hell"
because of the nested structure and the difficulty of reading and maintaining the code. */
setTimeout(() => {
  console.log("run the first time");
  setTimeout(() => {
    console.log("run the second time");
    setTimeout(() => {
      console.log("run the third time");
      setTimeout(() => {
        console.log("run the fourth time");
        setTimeout(() => {
          console.log("run the fifth time");
        }, 2000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 3000);

// ======================================================================
// +++++
// promise:
// => Đối tượng Promise đại diện cho sự hoàn thành cuối cùng (hoặc thất bại) của một hoạt động không đồng bộ và giá trị kết quả của nó.
// => Lời hứa là một proxy cho một giá trị không nhất thiết phải biết khi lời hứa được tạo. Nó cho phép bạn liên kết các trình xử lý với giá trị thành công cuối cùng hoặc lý do thất bại của hành động không đồng bộ. Điều này cho phép các phương thức không đồng bộ trả về các giá trị giống như các phương thức đồng bộ: thay vì ngay lập tức trả về giá trị cuối cùng, phương thức không đồng bộ trả về một lời hứa cung cấp giá trị tại một thời điểm nào đó trong tương lai.
/**
 * status: pending(đang chờ).
 * status: resolve(đã giải quyết).
 * status: reject(từ chối).
 */

// Syntax:
// argument: resole, reject
// new Promise(function(resolve, reject))
/* This code is creating a new Promise object called `willBuyIphone` that represents a future
completion (or failure) of an asynchronous operation and its resulting value. The Promise is created
with a function that takes two arguments, `resolve` and `reject`, which are functions that are
called to indicate whether the Promise has been fulfilled successfully or rejected with an error. */
let buyIphone = true;
let willBuyIphone = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (buyIphone) {
      resolve("Oh yeah I have new Iphone");
      console.log("OK OK");
    } else {
      reject("Oh no, I dont have new Iphone");
      console.log("not OK");
    }
  }, 1000);
});
// console.log(willBuyIphone); // => pending gặp nhiều khi gọi API.
// => Khi chúng ta call API chúng ta chờ server trả về kết quả thì trong khoảng thời gian đó cái promise của chúng ta sẽ ở trạng thái pending
// => promise chúng ta kết thúc khi nó được resolve hoặc bị reject hoặc luôn ở trạng thái pending.

// +++
// method in promise:
// .then(onFullfilled, onRejected)
// => truyền vào 2 argument: onFullfilled, onRejected.
function makePromise(buyIphone) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (buyIphone) {
        resolve("Oh yeah I have new Iphone");
      } else {
        reject("Oh no, I dont have new Iphone");
      }
    }, 1000);
  });
}
// onFullfilled -> resolve
// onRejected -> reject
let haveIphone = makePromise(false);
haveIphone
  .then(
    // (success) => console.log(success)
    (success) => {
      console.log(success);
      console.log("Im still happy");
    },
    // undefined: nếu một trong hai cái argument onFullfilled, onRejected mà muốn bỏ một cái thì phải để undefined.
    (reason) => console.log(reason)
  )
  .catch((error) => {
    // Những vấn đề xử lý lỗi nằm ở trong này
    console.log(error);
    // console.log("Im still happy");
  })
  .finally(() => {
    console.log("Im still happy");
  });

// +++
// catch:
// => Dùng để bắt lỗi.
// => Bắt vào trường hợp Rejected.
// => Dùng nối tiếp vào then.
// => Khi lời hứa được thực hiện thì nó chạy vào then còn lời hứa mà thất bại thì chạy vào catch.

// +++
// finally:
// => cho dù lời hứa then thanh công hay thất bại catch thì nó vẫn sẽ chạy vào finally.

// +++
// Exercise:
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1. run the first time");
  }, 3000);
})
  .then((data) => {
    console.log(data);
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("2. run the second time");
      }, 1000);
    });
  })
  .then((data) => {
    console.log(data);
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("3. run the third time");
      }, 1000);
    });
  })
  .then((data) => {
    console.log(data); // => data ở đây chính là resolve trước đó
  });

// setTimeout(() => {
//   console.log("run the first time");
//   setTimeout(() => {
//     console.log("run the second time");
//     setTimeout(() => {
//       console.log("run the third time");
//       setTimeout(() => {
//         console.log("run the fourth time");
//         setTimeout(() => {
//           console.log("run the fifth time");
//         }, 2000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 3000)

// +++
// Promise.all
// => Phương thức tĩnh Promise.all() lấy một lần lặp lại các lời hứa làm đầu vào và trả về một Lời hứa duy nhất. Lời hứa được trả về này hoàn thành khi tất cả các lời hứa của đầu vào hoàn thành (bao gồm cả khi một lần lặp trống được thông qua), với một mảng các giá trị hoàn thành. Nó từ chối khi bất kỳ lời hứa nào của đầu vào từ chối, với lý do từ chối đầu tiên này.
// Trả về resolve khi tất cả promises truyền vào đều resolve
// Trả về rejected khi có 1 cái promise nào đó bị reject
/**
 * The function returns a promise that resolves with a given string after a specified timer duration.
 * @param [timer=1000] - The timer parameter is the time in milliseconds for which the function will
 * wait before resolving the promise.
 * @param str - The parameter `str` is a string that will be returned as the resolved value of the
 * Promise after the specified `timer` duration.
 * @returns The function `makeTimer` is returning a Promise object that resolves with the `str`
 * parameter after a specified `timer` duration.
 */
function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
/* The above code is creating three timers using the `makeTimer` function with different durations
(1000ms, 2000ms, and 3000ms) and labels ("first time", "second time", and "third time"). It then
uses `Promise.all` to wait for all three timers to finish and logs the data (an array of the labels)
to the console. */
const timer1 = makeTimer(1000, "first time");
const timer2 = makeTimer(2000, "second time");
const timer3 = makeTimer(3000, "third time");
const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
  //   console.log(data);
});

// +++
// Promise.race
// => Phương thức tĩnh Promise.race() lấy một lần lặp lại các lời hứa làm đầu vào và trả về một Lời hứa duy nhất. Lời hứa được trả lại này ổn định với trạng thái cuối cùng của lời hứa đầu tiên được giải quyết.
// => nó trả về cái nhanh nhất
/* The above code is creating a Promise that will resolve with the value of the first Promise that
resolves among the Promises `timer1`, `timer2`, and `timer3`. Once the first Promise resolves, the
`then` method is called with the resolved value as the argument, and it logs the value to the
console. */
const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) => {
  console.log(data);
});

// +++
// Promise.allSettled
// => Phương thức tĩnh Promise.allSettled() lấy một lần lặp lại các lời hứa làm đầu vào và trả về một Lời hứa duy nhất. Lời hứa được trả lại này hoàn thành khi tất cả các lời hứa của đầu vào ổn định (bao gồm cả khi một lần lặp trống được thông qua), với một mảng các đối tượng mô tả kết quả của mỗi lời hứa.
// Trả về resolve khi tất cả promises truyền vào đều resolve
// Trả về rejected khi có 1 cái promise nào đó bị reject
/**
 * The function checks if a person is a frontend developer based on whether they know HTML or not.
 * @param languages - an array of programming languages that the developer knows.
 * @returns A Promise object is being returned.
 */
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not Frontend developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}
/* The above code is defining two variables `dev1` and `dev2` and calling the function `isFrontendDev`
with an array of skills as an argument for each variable. The function is expected to return a
boolean value indicating whether the developer is a frontend developer or not based on their skills.
The first variable `dev1` is passing an array of two skills "html" and "css" and the second variable
`dev2` is passing an array of one skill "css". */
const dev1 = isFrontendDev(["html", "css"]);
const dev2 = isFrontendDev(["css"]);
// const devAll = Promise.all([dev1, dev2]).then((data) => {
//   console.log(data);
// });
// const devRace = Promise.race([dev1, dev2]).then((data) => {
//   console.log(data);
// });
/* The above code is creating a Promise that resolves when all the Promises in the array `[dev1, dev2]`
have settled (either fulfilled or rejected). Once the Promise is settled, the `then` method is
called with the `data` parameter, which is an array of objects representing the settled state of
each Promise in the original array. The code then logs this array to the console. */
const devRace = Promise.allSettled([dev1, dev2]).then((data) => {
  console.log(data);
});

// +++
// try catch
// => Câu lệnh try...catch bao gồm một khối try và một khối catch, một khối finally hoặc cả hai. Mã trong khối thử được thực thi trước và nếu nó đưa ra một ngoại lệ, mã trong khối bắt sẽ được thực thi. Mã trong khối cuối cùng sẽ luôn được thực thi trước khi luồng điều khiển thoát khỏi toàn bộ cấu trúc.
// try(cố gắng làm 1 việc gì đó), catch(bắt lỗi)
/**
 * The function checks if "html" is included in an array of languages and returns a promise that
 * resolves with the message "You are frontend developer" after a 1 second delay.
 * @param languages - an array of programming languages that the developer knows.
 * @returns A Promise object is being returned.
 */
function isFrontendDev2(languages) {
  if (!languages.includes("html")) {
    throw new Error("You are not Frontend developer");
  }
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}
/* The above code is attempting to call the function `isFrontendDev2` with an array argument of
`["css"]`. This function is expected to return a promise that will either resolve with some data or
reject with an error. The code then logs the resolved data or the caught error to the console. If
there is an error thrown in the try block or not, the code will always log "demo" to the console
using the `finally` block. */
try {
  isFrontendDev2(["css"])
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
} catch (error) {
  console.log("Oh noooooooooo");
} finally {
  console.log("demo");
}

// ======================================================================
// +++++
// async await
// => Giúp chúng ta code được clean hơn, dễ nhìn hơn chứ không phải để thay thế promise
/**
 * The "wait" function returns a promise that resolves after a specified amount of time.
 * @param [timer=0] - The timer parameter is a number that represents the amount of time in
 * milliseconds that the function should wait before resolving the promise. If no value is provided for
 * the timer parameter, it defaults to 0, which means the function will immediately resolve the
 * promise.
 * @returns The function `wait` is returning a Promise object.
 */
function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
// await wait(2000);
// await: chỉ sử dụng được ở bên trong function mà function đó sử dụng async

// function expression
async function run() {
  console.log("starting");
  await wait(2000);
  console.log("running");
  await wait(1000);
  console.log("ending");
}
run();

// arrow function
const fn = async () => {};
const student = {
  fullname: async function () {},
  async calcAge() {},
  yearly: async () => {},
};

/**
 * The function returns a promise that resolves with a given string after a specified timer duration.
 * @param [timer=1000] - The timer parameter is the time in milliseconds for which the function will
 * wait before resolving the promise.
 * @param str - The parameter `str` is a string that will be returned as the resolved value of the
 * Promise after the specified `timer` duration.
 * @returns The function `makeTimer` is returning a Promise object that resolves with the `str`
 * parameter after a specified `timer` duration.
 */
function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}

/**
 * The function creates two timers with different durations and logs their completion times using
 * Promise.all.
 */
async function allTimer() {
  const timer1 = makeTimer(1000, "first time");
  const timer2 = makeTimer(2000, "second time");
  const [a, b] = await Promise.all([timer1, timer2]);
  console.log(a, b);
  // console.log(timer1);
  // console.log(timer2);
  // const timer3 = makeTimer(3000, "third time");
}
allTimer();

/**
 * The function checks if a person is a frontend developer based on whether they know HTML or not.
 * @param languages - an array of programming languages that the developer knows.
 * @returns A Promise object is being returned.
 */
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not Frontend developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}

/**
 * The function logs an error to the console.
 * @param err - The parameter `err` is likely an error object that is passed as an argument to the
 * `handleError` function. The function logs the error object to the console for debugging purposes.
 */
function handleError(err) {
  console.log(err);
}

/**
 * The function calls the isFrontendDev function with an array of skills and logs the result to the
 * console.
 * @returns The function `go()` is returning the value of `dev1`, which is the result of calling the
 * `isFrontendDev()` function with the argument `["html"]`. The specific value that is returned depends
 * on the implementation of the `isFrontendDev()` function.
 */
async function go() {
  const dev1 = await isFrontendDev(["html"]);
  console.log(dev1);
  return dev1;
}
// console.log(go());
go().catch(handleError);
