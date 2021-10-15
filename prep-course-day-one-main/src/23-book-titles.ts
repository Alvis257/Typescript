export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (books) => { 
let arr=[];
books.forEach(book => {
  arr.push(book.title);
  });
  return arr;
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
