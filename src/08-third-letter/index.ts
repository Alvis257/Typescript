/**
 * Write a function that returns the third letter of the given word.
 * 
 * Example
 * 
 * Input: "STARWARS"
 * Output: "A"
 */

function findThirdLetter(input: string): string {
    return input.slice(2, 3);
}

export { findThirdLetter };