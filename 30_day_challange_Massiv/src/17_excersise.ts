function fiveCharactersOrFewerOnly(arr: string[]): string[] {
  let newArr = arr.filter(word => word.length <= 5);
  return newArr;
}

// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]