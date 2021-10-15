export { };

const removeFromArray = function (arr: number[], ...valueToRemove: number[]): number[] {
  let index = 0;
  for (let i = 0; i < valueToRemove.length; i++) {
    index = arr.indexOf(valueToRemove[i]);
    if (index === -1) continue;
    else arr.splice(index, 1);
  }
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]
