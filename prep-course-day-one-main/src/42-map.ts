export { };

function tidyUpString(str: string): string {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
const capitalise = str1 => {
  let newstring = [""];
  let newstring1 = [""];
  newstring = str1;

  for (let i = 0; i < str1.length; i++) {
    newstring[i] = tidyUpString(str1[i]);
    newstring1[i] = newstring[i].slice(0, 1).toUpperCase();
    newstring[i] = newstring1[i] + newstring[i].slice(1, newstring[i].length);
  }
  return newstring;
}
const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
