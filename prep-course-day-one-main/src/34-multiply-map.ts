export { };

/**
 * Implement map function which works similarly as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */



const numbers = [1, 2, 3];

const doubled = numbers.map(function (number: number): number {
  return number * 2;
});

console.log(doubled); // Expected result: [2, 4, 6]
