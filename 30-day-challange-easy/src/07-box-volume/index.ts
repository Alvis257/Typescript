/**
 * You have decided to move to a new house and you have put all your stuff in boxes.
 * Unfortunately, you are not sure if they will fit in your car.
 * Given an array of boxes, create a function that returns the total volume of all those boxes combined together.
 * A box is represented by an array with three elements: length, width and height.
 * 
 * Example:
 * 
 * Input: [[2, 3, 2], [6, 6, 7], [1, 2, 1]]
 * Calculation: (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266
 * Output: 266
 */

function boxVolume(boxes: number[][]): number {
    let sumArr: number[] = [1];
    let sum = 0;
    for (let i = 0; i < boxes.length; i++) {
        sumArr[i] = boxes[i][0];
        for (let j = 1; j < boxes[i].length; j++) {
            sumArr[i] *= boxes[i][j];
        }
    }
    for (let i = 0; i < sumArr.length; i++) {
        sum += sumArr[i];
    }
    return sum;
}

export { boxVolume };