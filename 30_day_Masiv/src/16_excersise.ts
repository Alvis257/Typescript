function evensOnly(arr: number[]): number[] {
    let newArr = arr.filter(number => number % 2 === 0);
    return newArr;
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]