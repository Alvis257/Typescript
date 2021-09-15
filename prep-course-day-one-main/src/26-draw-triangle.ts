export { };

function draw(a: number): void {
    let s = "";
    for (let i = 0; i < a; i++) {
        for (let j = 0; j <= i; j++) {
            s += "*";
        }
        console.log(s);
        s = "";
    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
