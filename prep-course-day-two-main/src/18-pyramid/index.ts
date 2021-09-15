/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */



function pyramid(n: number):any{
  
  for (let i = 0; i < n; i++) {
        let str='';
    for (let k = 0; k < n-i-1; k++) {
      str += " ";
    }
    for (let j = 0; j < 2 * i+1; j++) {
      str += "#";
    }
    for (let k = i; k < n-1; k++) {
      str += " ";
    }
    console.log(str);
  }
  
}



export { pyramid };
