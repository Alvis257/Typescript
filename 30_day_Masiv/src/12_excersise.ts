const num = 348597; // => [7,9,5,8,4,3]

function numbersRevers(numbers: number): number[] {
    const newString = num.toString().split("").reverse();
    let newNum = newString.map(num => parseInt(num));
    return newNum;
}

console.log(numbersRevers(num));