const array2 = (5); // => [0,1,2,3,4]

function arrayWithContent(array: number): number[] {
    let newArr = [...Array(array)].map((u, i) => i)
    return newArr;
}

console.log(arrayWithContent(array2));