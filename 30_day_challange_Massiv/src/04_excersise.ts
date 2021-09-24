function capitalizeNames(arr: string[]): string[] {
  return arr.map(element =>
    element.toUpperCase().charAt(0) + element.toLowerCase().slice(1)
  );
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]