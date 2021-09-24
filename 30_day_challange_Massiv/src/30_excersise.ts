
function monkeyCount(array: number): number[] {
    let newArr = [...Array(array)].map((u, i) => i+1)
    return newArr;
}

console.log(monkeyCount(10)); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(monkeyCount(1)); // => [1]
