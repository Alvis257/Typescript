function fiveAndGreaterOnly(arr: number[]): number[] {
  let newArr = arr.filter(number => number > 5);
  return newArr;
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]