interface person {
    name: string
    age: number
}

function namesOnly(arr: person[]): string[] {
    return arr.map(function (arr: person): string {
        return arr.name
    });
}

console.log(
    namesOnly([
        {
            name: "Angelina Jolie",
            age: 80,
        },
        {
            name: "Eric Jones",
            age: 2,
        },
        {
            name: "Paris Hilton",
            age: 5,
        },
        {
            name: "Kayne West",
            age: 16,
        },
        {
            name: "Bob Ziroll",
            age: 100,
        },
    ])
);
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]