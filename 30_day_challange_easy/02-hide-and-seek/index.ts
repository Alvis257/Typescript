/**
 * A lowercase word is hiding amongst a crowd of uppercase letters! 
 * Write a function that returns the hidden name.
 */

function hideAndSeek(crowd: string): string | undefined {
    let newString = crowd.match(/[a-z]/g);
    return newString?.join('');
}

export { hideAndSeek };