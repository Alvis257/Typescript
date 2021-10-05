function romb(n: number): string {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let k = i; k < n - 1; k++) {
            str += " ";
        }
        for (let j = 0; j < i + 1; j++) {
            str += "*";
            str += " ";
        }
        for (let k = i; k < n - 1; k++) {
            str += " ";
        }
        str += "\n";
    }
    for (let i = 1; i < n; i++) {
        for (let k = i; k > 0; k--) {
            str += " ";
        }
        for (let j = n; j > i; j--) {
            str += "*";
            str += " ";
        }
        for (let k = i; k > 0; k--) {
            str += " ";
        }
        str += "\n";
    }
    return str;
}

console.log(romb(4));