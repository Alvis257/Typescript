export { };

const repeatString = (repetetWord: string, repeatNumber: number): string => {
    let string = "";
    for (let i = 0; i < repeatNumber; i++) {
        string = string + repetetWord;
    }
    return string;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
