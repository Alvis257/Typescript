
const swapCase = function (string:string) {
  let newString = string.split(" ").map(function(element:string){
       if ((string.indexOf(element,0)+1)%2!== 0)
       {
        return element.toUpperCase();
       }
       else return element;
   })
   return newString;
  };
  
 console.log(swapCase("hey gurl, lets javascript together sometime")); // => "HEY gurl, LETS javascript TOGETHER sometime"