/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {

   let count = 0,
      newStr = '';
   str.split('').forEach(function (element) {
      if (str.split(element).length > count) {
         count = str.split(element).length;
         newStr = element;
      }
   });
   return newStr;
}

export { maxChar };
