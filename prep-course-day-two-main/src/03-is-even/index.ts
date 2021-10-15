/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number):boolean {
    let isEven1 = true;
    if(n<=-1)
    {
    n=n*(-1);
    }
    for (let  i=1;  i <= n; i++){
        isEven1 = !isEven1;
    }
    return isEven1;
}

export { isEven };
