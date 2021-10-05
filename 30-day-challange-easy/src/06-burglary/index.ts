/**
 * You just returned home to find your mansion has been robbed! 
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */

function burglary(input: any): number | string {
    let sum = 0;
    for (let element in input) {
        sum += input[element];
    }
    if (sum === 0) {
        return "Lucky you!";
    }
    return sum;
}

export { burglary };