// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the alphabet by one.

// Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use Ascii code to acomplish this.



const shiftLetters = function (string: string): string {
    let newString = string.split("").map((letters: string) => String.fromCharCode(letters.charCodeAt(0) + 1));
    return newString.join("");
};

console.log(shiftLetters("hello")); // => 'ifmmp'
console.log(shiftLetters("abcxyz")); // => "bcdyz{"