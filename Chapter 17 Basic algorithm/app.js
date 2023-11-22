// Thuật toán:
// => Một thuật toán là một loạt các hướng dẫn khép kín để thực hiện một chức năng.
// => Nói cách khác, thuật toán là một phương tiện mô tả cách giải một bài toán sao cho nó có thể được giải nhiều lần, bởi con người hoặc máy móc. Các nhà khoa học máy tính so sánh hiệu quả của các thuật toán thông qua khái niệm "Độ phức tạp của thuật toán" hoặc ký hiệu "Big O".
// ======================================================================
// +++++
// Big O Notation
// => Đo lường độ phức tạp của 1 thuật toán nào đó.
// => Khi chúng ta giải quyết 1 bài toán sẽ có rất nhiều thuật toán mỗi người có 1 thuật toán khác nhau chúng ta cần phải tìm ra thuật toán tối ưu nhất và hiệu quả nhất và chúng ta phải đo lường nó xem nó hoạt động như thế nào.
// O(1): [].push(item): best -> Khi làm việc với mảng
// O(n): for: Good -> dùng for
// O(logn): for([].push(item)): OK
// O(n^2): nested loop for(for): Bad
// O(n!): 6! = 6*5*4*3*2*1: Terrible
// function factorial(n) {
//   let num = n;
//   for (let index = 0; index < n; index++) {
//     num = factorial(n - 1);
//   }
//   return;
// }

// ======================================================================
// ++++++
// Sort and search(xắp xếp và tìm kiếm).
// +++++
// bubbleSort:
// => Xắp xếp nổi bọt
/**
 * This is a bubble sort function in JavaScript that sorts an array in ascending order.
 * @param array - an array of numbers that needs to be sorted using the bubble sort algorithm.
 * @returns The function `bubbleSort` returns a sorted array.
 */
function bubbleSort(array) {
  const arr = [...array]; // spread operator để biến thành mảng
  // Dùng 2 vòng lặp lồng nhau -> O(n^2)
  /* The code is implementing the bubble sort algorithm to sort an array in ascending order. It uses
  two nested loops to compare adjacent elements in the array and swap their positions if they are
  not in the correct order. The outer loop iterates over the entire array, while the inner loop
  iterates over the unsorted part of the array. The variable `num` represents the current element
  being compared, and `next` represents the next element. If `num` is greater than `next`, their
  positions are swapped using destructuring assignment. This process is repeated until the entire
  array is sorted. */
  for (let i = 0; i < arr.length; i++) {
    /* This is the inner loop of the bubble sort algorithm. It iterates over the unsorted part of the
    array and compares adjacent elements. The variables `num` and `next` represent the current
    element being compared and the next element, respectively. If `num` is greater than `next`,
    their positions are swapped using destructuring assignment. This process is repeated until the
    entire array is sorted. */
    for (let j = 0; j < arr.length - i; j++) {
      let num = arr[j];
      let next = arr[j + 1];
      if (num > next) {
        // const temp = arr[j + 1]; // temp: 4
        // arr[j + 1] = arr[j]; // next: 5
        // arr[j] = temp; // num: 4
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
const arr = [1, 5, 4, 8, 43, 32, 123, 0, 92, 63, 55, 999];
console.log(bubbleSort(arr));
console.log("arr", arr);
// bubble sort: sắp xếp nổi bọt
// [1, 5, 4, 8, 43, 32, 123, 0, 92, 63, 55, 999]
// [1,4,5,8, 3....]
// [1,4,5,3,8]
// [1,4,3,5,8]
// [1,3,4,5,8]
// Cách hoạt động:
// Nó sẽ kiểm tra hai số kiền kề ở trong mảng đó nếu như số nhỏ hơn hoặc lớn hơn sẽ đổi vị trí cho nhau theo tăng dần cho tới khi kiểm tra tới hai số liền kề cuối cùng.

// ======================================================================
// +++++
// Insertion sort:
// => Xắp xếp chèn
// -> Khá giống với bubbleSort
/**
 * The function performs an insertion sort on an array of numbers.
 * @param arr - an array of numbers that needs to be sorted using insertion sort algorithm.
 * @returns a sorted array in ascending order.
 */
function insertionSort(arr) {
  const array = [...arr]; // spread operator để biến thành mảng.
  /* The code is implementing the insertion sort algorithm to sort an array in ascending order. It uses
  two nested loops to compare adjacent elements in the array and insert the current element into its
  correct position in the sorted part of the array. The outer loop iterates over the entire array,
  while the inner loop iterates over the sorted part of the array. The variable `current` represents
  the current element being compared, and `j` represents the index of the element in the sorted part
  of the array. The inner loop compares `current` with the elements in the sorted part of the array
  and shifts them to the right if they are greater than `current`. This process is repeated until
  `current` is in its correct position in the sorted part of the array. */
  for (let i = 1; i < array.length; i++) {
    // i = 2
    const current = array[i]; // 4
    let j; // undefined
    // j: 2-1 = 1
    // array[j] = 3
    // 3 > 5
    // array[j] = 5 > current: 4
    /* This is the inner loop of the insertion sort algorithm. It compares the current element
    (`current`) with the elements in the sorted part of the array (from index `0` to `i-1`) and
    shifts them to the right if they are greater than `current`. The loop starts at index `i-1` and
    iterates backwards until it reaches the beginning of the sorted part of the array (index `0`) or
    finds an element that is less than or equal to `current`. The line `array[j + 1] = array[j]`
    shifts the element at index `j` to the right by one position to make room for `current`.
    Finally, `array[j + 1] = current` inserts `current` into its correct position in the sorted part
    of the array. */
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
      // array[2] = 5
    }
    array[j + 1] = current; // 5
  }
  return array;
}

let data = [3, 5, 4]; // [3, 4, 5]
console.log(insertionSort(data));
console.log("data", data);
// [3, 5, 4]
// [3, 5, 5]
// [3, 4, 5]
// Insertion sort: sắp xếp chèn.
// [5, 3, 6, 1, 4]
// [3, 5, 6, 1, 4]
// [1, 3, 5, 6, 4]
// [1, 3, 4, 5, 6]

// ======================================================================
// +++++
// selectionSort:
// Xắp xếp chèn
/**
 * The function implements the selection sort algorithm to sort an array in ascending order.
 * @param array - an array of numbers that needs to be sorted using selection sort algorithm.
 * @returns the sorted array in ascending order.
 */
function selectionSort(array) {
  /* This code is implementing the selection sort algorithm to sort an array in ascending order. The
  outer loop iterates over the entire array, while the inner loop iterates over the unsorted part of
  the array. The variable `minIndex` represents the index of the minimum element in the unsorted
  part of the array. The inner loop compares each element in the unsorted part of the array with the
  current minimum element and updates `minIndex` if it finds a smaller element. After the inner loop
  completes, the minimum element is swapped with the first element in the unsorted part of the
  array. This process is repeated until the entire array is sorted. */
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i; // 0
    // j: 1
    /* This code is implementing the inner loop of the selection sort algorithm. It iterates over the
    unsorted part of the array (starting from index `i+1`) and compares each element with the
    current minimum element (at index `minIndex`). If it finds a smaller element, it updates
    `minIndex` to the index of that element. After the inner loop completes, the minimum element is
    swapped with the first element in the unsorted part of the array (at index `i`). This process is
    repeated until the entire array is sorted. */
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j; // 1 3 -> 3
      }
    }
    /* This line of code is swapping the minimum element (at index `minIndex`) with the first element
    in the unsorted part of the array (at index `i`). It uses destructuring assignment to swap the
    values of the two elements without needing a temporary variable. */
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
console.log(selectionSort([5, 3, 4, 1, 2]));
// Sắp xếp chèn: Selection sort
// [5,3,4,1,2]
// min = 5; 5 3 4 1 2
// sorted array(mảng đã sắp xếp): 1 | unsorted array(mảng chưa sắp xếp): 3 4 5 2
// sorted array: 1 2 | unsorted array: 4 5 3
// sorted array: 1 2 3 | unsorted array: 5 4
// sorted array: 1 2 3 4 | unsorted array: 5
// sorted array: 1 2 3 4 5 | unsorted array []
// => [1, 2, 3, 4, 5]

// ======================================================================
// +++++
// quick sort: Sắp xếp nhanh nhất
// Có arr = [3,7,9,0,1,5,4,2]
// pivot(chia để trị) -> nó sẽ tách tahnhf hai mảng để so sánh với nhau.
// pivot arr[0]
// 0 1 2 pivot 7 9 5 4
// pivot: 0
// pivot 1 2
// pivot: 1
// 2
// 0 1 2
// 7 9 5 4
// pivot: 7
// 5 4 pivot(7) 9
// pivot: 5
// 4 pivot(5)
// 4 5 7 9
// 0 1 2 pivot(3) 4 5 7 9
/**
 *
 *
 */
/**
 * This is a JavaScript function that implements the quicksort algorithm to sort an array of numbers.
 * @param arr - The input array that needs to be sorted using the quicksort algorithm.
 * @returns The `quickSort` function is returning a sorted array in ascending order.
 */
function quickSort(arr) {
  /* `const list = [...arr];` is creating a new array `list` that is a copy of the original array `arr`
  using the spread operator `...`. This is done to avoid modifying the original array during the
  sorting process. */
  const list = [...arr];
  /* This line of code is checking if the length of the input array `list` is less than 2. If it is, it
  means that the array only has one element or is empty, and therefore it is already sorted. In this
  case, the function returns the original array `list` without performing any further sorting. This
  is the base case of the recursive function, which stops the recursion and returns the sorted array
  once the array has been divided into single-element subarrays. */
  if (list.length < 2) return list;
  /* `const pivot = list[0];` is assigning the first element of the `list` array to the `pivot`
  variable. This element will be used as the pivot (or partitioning) element in the quicksort
  algorithm. The pivot element is used to divide the array into two subarrays, one containing
  elements smaller than the pivot and the other containing elements larger than the pivot. */
  const pivot = list[0];
  /* These lines of code are filtering the elements of the `list` array into two subarrays based on
  whether they are smaller or bigger than the `pivot` element. The `filter()` method creates a new
  array with all elements that pass the test implemented by the provided function. In this case, the
  provided function is an arrow function that takes an `item` parameter and returns a boolean value
  indicating whether the `item` is smaller or bigger than the `pivot` element. The resulting
  `smaller` and `bigger` arrays are then concatenated with the `pivot` element in between them using
  the spread operator `...` and returned as the sorted array by the `quickSort()` function. */
  const smaller = list.filter((item) => item < pivot);
  const bigger = list.filter((item) => item > pivot);
  /* This line of code is returning a sorted array by recursively calling the `quickSort()` function on
  two subarrays (`smaller` and `bigger`) that are created by filtering the original `list` array
  based on whether their elements are smaller or bigger than the `pivot` element. The spread
  operator `...` is used to concatenate the sorted `smaller` array, the `pivot` element, and the
  sorted `bigger` array into a single array. */
  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}
/* The code is creating an array `array` with 8 elements and then sorting it using the built-in
`sort()` method with a callback function that sorts the elements in ascending order. The sorted
array is then logged to the console. The code then calls the `quickSort()` function with the
original `array` as an argument and logs the sorted array returned by the function to the console.
The `quickSort()` function implements the quicksort algorithm to sort the array in ascending order. */
const array = [3, 7, 9, 0, 1, 5, 4, 2];
// const sortedArray = [...array].sort((a, b) => a - b);
// console.log(sortedArray);
console.log(quickSort(array));

// ======================================================================
// +++++
// linearSearch:
// -> Dựa trên mảng chưa được xắp xếp
// arr [1,2,3,4,5,6,7,8,9]
// Tìm ra
// value = 5
// index = ? -> 4
/**
 * The function performs a linear search on an array to find the index of a given value.
 * @param arr - an array of values to search through
 * @param value - The value parameter in the linearSearch function is the value that we are searching
 * for in the array. The function will return the index of the first occurrence of this value in the
 * array.
 * @returns the index of the first occurrence of the `value` parameter in the `arr` parameter. If the
 * `value` is not found in the `arr`, the function will return `undefined`.
 */
function linearSearch(arr, value) {
  let index;
  /* The above code is using a for loop to iterate through an array called `arr`. It checks if the
  current element in the array is equal to a variable called `value`. If it is, it sets a variable
  called `index` to the current index of the element in the array. */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) index = i;
  }
  return index;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // -> 5 = value.

// ======================================================================
// +++++
// binarySearch: tìm kiếm nhị phân
// -> Dựa trên mảng đã được xắp xếp.
// arr [1,3,5,7,11,13,19,23,29,31,37,41,43,47,53,59]
// low = 0; high = arr.length - 1; value= 37
// mid = 23; value = 37 -> 37 > 23
// [29,31,37,41,43,47,53,59]
// value = 37; mid = 41 -> 41 > 37
// [29,31,37]
// mid = 31, value = 37
// value = 37 -> found
/**
 * The function performs a binary search on a sorted list to find the index of a given item.
 * @param list - [1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
 * @param item - 37 (the value we are searching for in the list)
 * @returns The index of the element 37 in the given array [1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41,
 * 43, 47, 53, 59].
 */
function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1; // 15-10
  while (low <= high) {
    // 8 < 15
    // 8 < 11
    // 9 < 11
    const midIndex = Math.floor((low + high) / 2); // 7-11-9-10
    const midValue = list[midIndex]; // 23-41-31-37
    if (midValue === item) return midIndex;

    if (midValue > item) {
      // 23 < 37
      // 41 > 37
      high = midIndex - 1;
    } else {
      // 31 < 37
      low = midIndex + 1; // 8-9
    }
  }
  return null;
}
console.log(
  binarySearch([1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59], 37)
);

// ======================================================================
// +++++
// interpolationSearch:
/**
 * The function performs an interpolation search on a given list to find a specified item.
 * @param list - an array of numbers that is sorted in ascending order
 * @param item - The item we are searching for in the list. In this case, it is the number 37.
 * @returns The index of the searched item (37) in the given list ([1, 3, 5, 7, 11, 13, 19, 23, 29, 31,
 * 37, 41, 43, 47, 53, 59]). In this case, the output will be 10, which is the index of 37 in
 */
function interpolationSearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const midIndex =
      low +
      Math.floor(
        ((high - low) * (item - list[low])) / (list[high] - list[low])
      );
    const midValue = list[midIndex];
    if (midValue === item) return midIndex;

    if (midValue > item) {
      high = midIndex - 1;
    } else {
      low = midIndex + 1;
    }
  }
  return null;
}
console.log(
  interpolationSearch(
    [1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59],
    37
  )
);
// https://medium.com/@smellycode/demystifying-interpolation-formula-for-interpolation-search-211780c43269
