function pyramid(n: number,symbol:string):string{
  let str='';
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < 2 * i+1; j++) {
        str += symbol;
      }
      for (let k = i; k < n-1; k++) {
        str += " ";
      }
      str += "\n";
    } 
    return str;
  }

  console.log(pyramid(5,"$"));