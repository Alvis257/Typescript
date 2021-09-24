
const swapCase = function (string: string): string {
  let newString = string.split(" ").map(function (element: string, index: number) {
    if (index % 2 !== 0) {
      return element;
    }
    else return element.toUpperCase();
  })
  return newString.join(" ");
};

console.log(swapCase("hey gurl, lets javascript together sometime")); // => "HEY gurl, LETS javascript TOGETHER sometime"