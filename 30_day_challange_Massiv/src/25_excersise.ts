// Write a function that takes a string and a target, and returns true or false if the target is present in the string.



const isPresent = function (string: string, target: string): boolean {
  let count = false;
  string.split("").forEach(element => {
    if (element === target) {
      count = true;
    }
  });
  return count;
};

console.log(isPresent("abcd", "b")); // => true
console.log(isPresent("efghi", "a")); // => false