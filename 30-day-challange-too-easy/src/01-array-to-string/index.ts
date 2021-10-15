/**
 * Write a function that converts the given array of words into a sentence.
 * All words in the sentence should be seperated by a comma and a space.
 * Return the result.
 * 
 * Example
 * 
 * Input: ["Banana", "apple"]
 * Output: "Banana, apple"
 */

import { convertTypeAcquisitionFromJson } from "typescript";

function arrayToString(input: string[]) {
    let newString= input.join(", ");
    return newString;
 }

export { arrayToString };