/**
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order in a new array.
 */

function maxMin(numbers: number[]) {
    let min = numbers[0];
    let max = numbers[0];
    numbers.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    numbers.forEach(element => {
        if (element < min) {
            min = element;
        }
    });
    return [min, max];
}

export { maxMin };