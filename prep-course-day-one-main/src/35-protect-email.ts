export { };

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email: string): string {
    let newemail = email.split("@");
    let newemail1 = newemail[0].substring(0, 3);
    return newemail1 + "...@" + newemail[1];
}



console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
