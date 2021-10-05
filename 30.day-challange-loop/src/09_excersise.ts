function drawing(n: number): string {
    let str = '';
    for (let k = 0; k < n + 1; k++) {
        str += " ";
    }
    for (let j = 0; j < 1; j++) {
        str += "|";
    }
    str += "\n";
    for (let i = 0; i < n; i++) {
        for (let k = i; k < n; k++) {
            str += " ";
        }
        for (let j = 0; j < i + 1; j++) {
            str += "*";

        }
        for (let j = 0; j < 1; j++) {
            str += "|";
        }
        for (let j = 0; j < i + 1; j++) {
            str += "*";

        }
        for (let k = i; k < n; k++) {
            str += " ";
        }
        str += "\n";
    }
    return str;
}

console.log(drawing(1));