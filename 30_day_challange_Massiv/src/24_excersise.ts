// Write a function that takes a string and returns an object representing the character count for each letter.
const countLetters = function (string: string): any {
    let charactercount: any = {};
    string.split("").forEach(letter => {
        if (!charactercount[letter]) {
            charactercount[letter] = 1;
        }
        else charactercount[letter]++;
    });
    return charactercount;
};

console.log(countLetters("abbcccddddeeeee")); // => {a:1, b:2, c:3, d:4, e:5