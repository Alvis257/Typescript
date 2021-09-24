// Print the rectange with a size of n x n where n is a number provided by user.
function rectangle(n: number): string {
    let arr = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr += "*";
        }
        arr += "\n";
    }
    return arr;
}

console.log(rectangle(10))