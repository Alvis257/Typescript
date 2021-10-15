export { };

function tidyUpString(str: string): string {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
const capitalise = str1 => {
  let newStr = [""];
  let letter = [""];
  let copystr = str1;
  letter = str1.slice(0, 1).toUpperCase();
  newStr = letter + copystr.slice(1, str1.length);
  return newStr;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map(item => {
  item = tidyUpString(item);
  return capitalise(item);
}); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
