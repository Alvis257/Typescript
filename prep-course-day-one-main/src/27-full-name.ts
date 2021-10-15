export { };

/**
 * Create a function called fullName, which concatenates two strings together
 */
function fullName(name1: string, name2: string): string {
    return "'" + name1.concat(' ').concat(name2) + "'";
}
console.log(fullName("John", "Doe")); //Expected output: 'John Doe'
