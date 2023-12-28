/*---------------------------------------------------  Difficulty Level : Easy ----------------------------------------------*/


// Problem 1:
// Write a function doubleNumbers that takes an array of numbers as input and returns a new array where each number is multiplied by 2.


function doubleNumbers(numbers) {
    // Your code here
}
const doubledResult = doubleNumbers([1, 2, 3, 4]); // Returns: [2, 4, 6, 8]
// Problem 2:
// Write a function stringLengths that takes an array of strings as input and returns a new array that contains the lengths of each string.


function stringLengths(strings) {
    // Your code here
}
const lengthsResult = stringLengths(['apple', 'banana', 'cherry']); // Returns: [5, 6, 6]

// Problem 3:
// Write a function celsiusToFahrenheit that takes an array of temperatures in Celsius as input and returns a new array with the corresponding temperatures in Fahrenheit. The formula is (Celsius * 9/5) + 32.


function celsiusToFahrenheit(celsiusTemperatures) {
    // Your code here
}
const fahrenheitResult = celsiusToFahrenheit([0, 25, 100]); // Returns: [32, 77, 212]

// Problem 4:
// Write a function capitalizeWords that takes an array of words as input and returns a new array where each word is capitalized.


function capitalizeWords(words) {
    // Your code here
}
const capitalizedResult = capitalizeWords(['hello', 'world', 'javascript']); // Returns: ['Hello', 'World', 'Javascript']


// Problem 5:
// Write a function increaseAges that takes an array of objects representing people with their ages as input and returns a new array that contains only the ages increased by 1.

function increaseAges(people) {
    // Your code here
}
const increasedAgesResult = increaseAges([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]); // Returns: [26, 31]




/*--------------------------------------------------- Difficulty Level : Medium ----------------------------------------------*/

// Problem 1:
// Write a function calculateSquareRoots that takes an array of numbers as input and returns a new array where each number is replaced by its square root.


function calculateSquareRoots(numbers) {
    // Your code here
}
// Example usage:
const squareRootsResult = calculateSquareRoots([4, 9, 16, 25]); // Returns: [2, 3, 4, 5]
Problem 2:

// Create a function filterEvenLengthWords that takes an array of strings as input and returns a new array containing only the words with an even length.


function filterEvenLengthWords(words) {
    // Your code here
}
// Example usage:
const evenLengthWordsResult = filterEvenLengthWords(['apple', 'banana', 'orange', 'grape']); // Returns: ['banana', 'orange']
Problem 3:
// Write a function convertToTitleCase that takes an array of strings as input and returns a new array where each string is converted to title case (the first letter of each word is capitalized).


function convertToTitleCase(strings) {
    // Your code here
}
// Example usage:
const titleCaseResult = convertToTitleCase(['hello world', 'javascript is fun']); // Returns: ['Hello World', 'Javascript Is Fun']
// Problem 4:
// Create a function calculateTotalPrice that takes an array of objects representing products with price and quantity properties and returns a new array with the total price for each product (price * quantity).


function calculateTotalPrice(products) {
    // Your code here
}
// Example usage:
const totalPriceResult = calculateTotalPrice([{ price: 10, quantity: 2 }, { price: 5, quantity: 3 }]); // Returns: [20, 15]
// Problem 5:
// Write a function reverseStrings that takes an array of strings as input and returns a new array where each string is reversed.


function reverseStrings(strings) {
    // Your code here
}
// Example usage:
const reversedStringsResult = reverseStrings(['hello', 'world', 'javascript']); // Returns: ['olleh', 'dlrow', 'tpircsavaj']


/*---------------------------------------------------     Difficulty Level : Hard     ----------------------------------------------*/

Problem 1:
// Write a function groupByCategory that takes an array of objects representing items with name and category properties, and returns a new object where items are grouped by category.


function groupByCategory(items) {
    // Your code here
}
// Example usage:
const groupedByCategoryResult = groupByCategory([
    { name: 'item1', category: 'A' },
    { name: 'item2', category: 'B' },
    { name: 'item3', category: 'A' },
    { name: 'item4', category: 'B' }
]);
// Returns: { A: [{ name: 'item1', category: 'A' }, { name: 'item3', category: 'A' }], B: [{ name: 'item2', category: 'B' }, { name: 'item4', category: 'B' }] }
// Problem 2:
// Create a function flattenNestedArrays that takes an array of nested arrays and returns a new array that is a flattened version of the input (all nested arrays are concatenated into a single array).


function flattenNestedArrays(nestedArrays) {
    // Your code here
}
// Example usage:
const flattenedArrayResult = flattenNestedArrays([[1, 2], [3, [4, 5]], [6]]);
// Returns: [1, 2, 3, 4, 5, 6]
// Problem 3:
// Write a function calculateFibonacciSum that takes an array of numbers as input, where each number represents the length of the Fibonacci sequence, and returns a new array with the sum of the first N Fibonacci numbers for each input.


function calculateFibonacciSum(sequenceLengths) {
    // Your code here
}
// Example usage:
const fibonacciSumResult = calculateFibonacciSum([3, 5, 2]);
// Returns: [4, 12, 2] // Explanation: Sum of the first 3 Fibonacci numbers is 1+1+2 = 4, sum of the first 5 is 1+1+2+3+5 = 12, sum of the first 2 is 1+1 = 2
// Problem 4:
// Create a function mergeArraysInOrder that takes an array of arrays of numbers and returns a new array that is the result of merging the arrays in ascending order.


function mergeArraysInOrder(arrays) {
    // Your code here
}
// Example usage:
const mergedArrayResult = mergeArraysInOrder([[1, 3, 5], [2, 4, 6], [0, 7, 8]]);
// Returns: [0, 1, 2, 3, 4, 5, 6, 7, 8]
// Problem 5:
// Write a function findLongestWord that takes an array of strings as input and returns a new array containing the longest word(s) from each string.


function findLongestWord(strings) {
    // Your code here
}
// Example usage:
const longestWordsResult = findLongestWord(['apple', 'banana', 'cherry', 'kiwi']);
// Returns: ['banana', 'cherry']