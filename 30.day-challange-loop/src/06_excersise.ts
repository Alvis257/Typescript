function drawing2(n: number): string {
    let str = '';
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            for (let j = 0; j < n + 1; j++) {
                str += "*";
            }
            str += "\n";
        }
        for (let j = 0; j < i + 1; j++) {
            str += ".";
        }
        for (let k = i; k < n; k++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
}

console.log(drawing2(5));