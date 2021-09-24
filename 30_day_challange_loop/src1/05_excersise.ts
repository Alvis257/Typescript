function pyramid1(n: number):string{
    let str='';
      for (let i = 0; i <= n+1; i++) {
            
        for (let j = 0; j <= n+1; j++) {
          if(i===j)
          {
              str+="*";
          }
          else if (j===n-i+1)
          {
              str+="*";
          }
          else str+=".";
        }
        str += "\n";
      } 
      return str;
    }
    
    console.log(pyramid1(5));