/**
 * There's a great war between the even and odd numbers. 
 * Many numbers already lost their life in this war and it's your task to end this. 
 * You have to determine which group is larger: the even, or the odd. The larger group wins.
 * Create a function that takes an array of integers, sums the even and odd numbers seperately, 
 * then returns "Odd numbers win by X" or "Even numbers win by X", X is survivors.
 * If both groups are equal, return "There are no winners"
 */

function warOfNumbers(numbers: number[]) {
    let countOdd = 0;
    let countEven = 0;
    numbers.forEach(number => {
        if (number % 2 === 0) {
            countEven += number;
        }
        else countOdd += number;
    });
    if (countOdd > countEven) {
        return "Odd numbers win by " + (countOdd - countEven);
    }
    else if (countOdd < countEven) {
        return "Even numbers win by " + (countEven - countOdd);
    }
    else return "There are no winners";
}

export { warOfNumbers };