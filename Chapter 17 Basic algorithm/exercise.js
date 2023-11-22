// 1. arrayReplace
// [1,2,3,1,1] -> [5,2,3,5,5]
/**
 * The function replaces all occurrences of a specified element in an array with a new element.
 * @param array - an array of elements that may contain the element to be replaced
 * @param elementToReplace - The element in the array that needs to be replaced.
 * @param newElement - The new value that will replace the elementToReplace in the array.
 * @returns the updated array with the replaced elements.
 */
function arrayReplace(array, elementToReplace, newElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToReplace) {
      array[i] = newElement;
    }
  }
  return array;
}
console.log(arrayReplace([1, 2, 3, 1, 1], 1, 5)); // -> 1(giá trị cần thay đổi), 5(giá trị được đưa vào).

// 2. Palindrome
// aaBAA -> AABaa -> Palindrome
// aaBAc -> cABaa -> is not palindrome
/**
 * The function checks if a given string is a palindrome (reads the same backwards as forwards)
 * regardless of case.
 * @param str - The input string that we want to check if it is a palindrome or not.
 * @returns a boolean value indicating whether the input string is a palindrome or not. If the string
 * is a palindrome, the function returns `true`, otherwise it returns `false`.
 */
function isPalindrome(str) {
  // change string to lowercase
  const newStr = str.toLowerCase();
  // const reverseStr = newStr.split("").reverse().join("");
  // aaBAA
  let reverseStr = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    reverseStr += newStr[i];
  }
  return newStr === reverseStr;
}
console.log(isPalindrome("aaBAA"));

// 3. Array Chunking
// [1,2,3,4,5,6,7,8], 3
// [[1,2,3],[4,5,6],[7,8]]
// [[1,2],[3,4],[5,6],[7,8]]
/**
 * The function takes an array and a size parameter, and returns a new array with subarrays of the
 * specified size.
 * @param array - The array parameter is an array of elements that we want to split into smaller
 * arrays.
 * @param size - The `size` parameter in the `chunk` function represents the maximum length of each
 * chunk or sub-array that the input `array` will be divided into.
 * @returns an array of arrays, where each sub-array contains a maximum of `size` elements from the
 * original `array`.
 */
function chunk(array, size) {
  let result = [];
  for (let index = 0; index < array.length - 1; index += size) {
    result.push(array.slice(index, index + size));
  }
  return result;
}
/* The code is calling the `chunk` function with an array `[1, 2, 3, 4, 5, 6, 7, 8]` and a size of `2`.
The `chunk` function takes an array and a size parameter, and returns a new array with subarrays of
the specified size. In this case, the resulting array will contain subarrays of length `2`. The
resulting array is then logged to the console using `console.log(result)`. */
const result = chunk([1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(result);
// const a = [1, 2, 3, 4, 5, 6, 7, 8].slice(0, 3);
// console.log(a);
// const b = [1, 2, 3, 4, 5, 6, 7, 8].slice(3, 6);
// console.log(b);
// const c = [1, 2, 3, 4, 5, 6, 7, 8].slice(6);
// console.log(c);

// 4. Reverse array
// [1,2,3,4,5] -> [5,4,3,2,1]
// reverse()
/**
 * The function takes an array as input and returns a new array with the elements in reverse order.
 * @param array - The input array that needs to be reversed.
 * @returns The function `reverseArray` is returning a new array that contains the elements of the
 * input array in reverse order.
 */
function reverseArray(array) {
  let result = [];
  for (let index = array.length - 1; index >= 0; index--) {
    result.push(array[index]);
  }
  return result;
}
/**
 * The function reverses an array by swapping its elements from the beginning and end until the middle
 * is reached.
 * @param array - The parameter "array" is an array of elements that needs to be reversed.
 * @returns the reversed array.
 */
function _reverseArray(array) {
  for (let index = 0; index < array.length / 2; index++) {
    // array[index]
    // array[array.length - 1 - index]
    [array[index], array[array.length - 1 - index]] = [
      array[array.length - 1 - index],
      array[index],
    ];
  }
  return array;
}
console.log(_reverseArray([1, 2, 3, 4, 5]));
// [1,2,3,4,5,6] -> [6,5,4,3,2,1]
