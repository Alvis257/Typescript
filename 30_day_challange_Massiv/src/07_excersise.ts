const arr=[1, -4, 7, 12]; // => 1 + 7 + 12 = 20
let sum=0;
arr.map(element=>{
    if(element>0)
    {
        sum+=element;
    }
})
console.log(sum);
