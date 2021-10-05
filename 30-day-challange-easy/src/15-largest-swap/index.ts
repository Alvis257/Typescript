/**
 * Write a function that takes a two-digit number and determines, if it's the largest of two possible digit swaps.
 */

function largestSwap(number: number):any {
    let numberArray:any[] = [];
    numberArray=number.toString().split("");
    let reversNumber:any=numberArray.reverse().join("");
    reversNumber=parseInt(reversNumber);
    if(number>reversNumber)
    {
        return true;
    }
    return false;
 }

export { largestSwap };