function rectangle2(n: number): string[] {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n - 1);
    }
    for (let i = 0; i < n; i++) {
        arr[0][i] = "*";
        arr[n - 1][i] = "*";
    }
    for (let i = 0; i < n; i++) {
        arr[i][0] = "*";
        arr[i][n - 1] = "*";
    }
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            arr[i][j] = " ";
        }
    }
    return arr;
}

console.log(rectangle2(6));