// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)
// 7 6 5 4 3 2 1

function warnTheSheep(arr: string[]): any {
    let wolf = "wolf";
    let index = arr.reverse().indexOf(wolf);
    if (index === 0) {
        return "Pls go away and stop eating my sheep";
    } else
        return index;
}

let Sheep = (["sheep", "sheep", "sheep", "wolf", "sheep"]);
//   "Oi! Sheep number 1! You are about to be eaten by a wolf!";
console.log("Oi! Sheep number " + warnTheSheep(Sheep) + "! You are about to be eaten by a wolf!");

Sheep = (["sheep", "sheep", "wolf"]);
//   "Pls go away and stop eating my sheep";
console.log(warnTheSheep(Sheep))