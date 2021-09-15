export { };

const count = (string:any, wordToFinde:string):number => {
    let count = 0;
    let newstring = string.toLowerCase(string).split(" ");
    for (let i = 0; i < string.length; i++) {
        if (newstring[i] == wordToFinde)
            count++;
    }
    return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
