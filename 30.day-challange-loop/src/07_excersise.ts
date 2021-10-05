function drawing1(n: number) {
    let str = '';
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if (j === 0 && i === 0) {
                str += "+";
            }
            else if (j === n && i === 0) {
                str += "+";
            }
            else if (j === 0 && i === n) {
                str += "+";
            }
            else if (j === n && i === n) {
                str += "+";
            }
            else if (j === 0) {
                str += "|";
            }
            else if (j === n) {
                str += "|";
            }
            else {
                str += "-";
            }
        }
        str += "\n";
    }
    return str;
}

console.log(drawing1(5));