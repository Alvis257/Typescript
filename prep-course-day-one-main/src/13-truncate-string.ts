export { };

function truncateString(word: string, number: number): any {
        return word.slice(0, number);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
