export { };

function draw(a: number): void {
    let s = "";
    for (let i = 0; i < a; i++) {
        for (let j = 0; j <= i; j++) {
            s += "*";
        }
        s += "\n";
    }
    console.log(s);
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
