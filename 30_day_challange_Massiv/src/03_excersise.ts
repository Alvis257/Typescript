function stringItUp(arr: number[]): string[] {
  return arr.map(Element => Element.toString().replace('', ""));
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]