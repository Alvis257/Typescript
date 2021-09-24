function findNeedle(arr: string[], tofinde: string): number {
    let index = arr.indexOf(tofinde);
    return index;
}

const Needel = (['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) // should return "found the needle at position 5"
let finde = "needle"

console.log("found the", finde, "at position", findNeedle(Needel, finde))