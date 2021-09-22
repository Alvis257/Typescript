
function stringConcat(arr: number[]): string {
    let newString = arr.map(element => element.toString());
    return newString.join("");
}

console.log(stringConcat([1, 2, 3])); // "123"