function rectangle1(n: number): string {
    let arr = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n * 2; j++) {
            if (j % 2 === 0) {
                arr += "*";
            }
            else arr += " ";
        }
        arr += "\n";
    }
    return arr;
}

console.log(rectangle1(3));