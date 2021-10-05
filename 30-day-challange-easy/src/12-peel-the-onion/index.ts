/**
 * You have made a virtual onion and want to peel off the outer layer.
 * Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.
 * 
 * Example:
 * 
 * Input:
[
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
]

 * Output: 
[
  ["f", "g"],
  ["j", "k"]
]
 */

function peelTheOnion(onion: (string | number)[][]): any {
  let newOnion = [];
  const copyOnion = [];
  let index = 0;
  for (let i = 0; i < onion.length; i++) {
    for (let j = 0; j < onion[i].length; j++) {
      if (i !== 0 && j !== 0 && j !== onion[i].length - 1 && i !== onion.length - 1) {
        newOnion[index] = onion[i][j];
        index++;
      }
    }
  }
  if (newOnion.length - 1 === 0) {
    copyOnion[0] = newOnion;
    return copyOnion;
  }
  else
    for (let i = 0; i <= newOnion.length + 1; i++) {
      copyOnion[i] = newOnion.splice(0, onion[i].length - 2);
    }
  return copyOnion;
}

export { peelTheOnion };
