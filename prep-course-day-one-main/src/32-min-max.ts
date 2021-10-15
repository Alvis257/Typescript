export { };

const min = array => {
    let i = 0;
    let copyMin = array[i];
    for (i = 0; i < array.length; i++) {
        if (copyMin > array[i]) {
            copyMin = array[i];
        }
    }
    return copyMin;
};

const max = array => {
    let i = 0;
    let copyMax = array[i];
    for (i = 0; i < array.length; i++) {
        if (copyMax < array[i]) {
            copyMax = array[i];
        }
    }
    return copyMax;
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
