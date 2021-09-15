export {};

function onlyTheAces(arr:string[]):string[] {
    let c=[];
    for (let i = 0; i< arr.length; i++) { 
            if (arr[i]=="Ace")
            {
                c.push(arr[i]);
            }    
    }
    return c;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
