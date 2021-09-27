/**
 * You just returned home to find your mansion has been robbed! 
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */

function burglary(input: any) {
    let sum=0;
  for (let i = 0; i < input.length; i++) {
      sum+=input[i]; 
  }
  if (sum===0)
  {
      return "Lucky you!";
  }
  else return sum;
 }

export { burglary };