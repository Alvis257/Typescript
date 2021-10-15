export { };
const stringToArray = (string:any):any => {
   let newstring = " ";
   string.forEach(element => {
      newstring = element.split(" ");
   });
   return newstring;
}

console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
