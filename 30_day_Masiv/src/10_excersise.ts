const array1: number[] = [4, 3, 9, 7, 2, 1]; // => [2,9,3,49,4,1]

let newArray = array1.map(element => {
    if (Math.sqrt(element) % 1 === 0) {
        return element = Math.sqrt(element);
    }
    else return element = Math.pow(element, 2);
});
console.log(newArray);