/**
 * Write a function that replaces all commas in the given sentence with question marks.
 * Return the result.
 * 
 * Example
 * 
 * Input: "Peanut, Butter, Sandwich"
 * Output: "Peanut? Butter? Sandwich"
 */

function replaceCommas(input: string) {
    return input.replaceAll(",","?");
 }

export { replaceCommas };