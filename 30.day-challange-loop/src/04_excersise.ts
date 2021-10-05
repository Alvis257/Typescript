function pyramid(n: number,symbol:string):string{
  let str='';
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <i+1; j++) {
        str += symbol;
        str+=" ";
      }
      for (let k = i; k < n-1; k++) {
        str += " ";
      }
      str += "\n";
    } 
    return str;
  }

  console.log(pyramid(5,"$"));