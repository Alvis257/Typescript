function sheepCount(arr: boolean[]): number {
    let count = 0;
    arr.forEach(element => {
        if (element === true) {
            count++;
        }
    });
    return count;
}

let sheep = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
];

console.log(sheepCount(sheep))
