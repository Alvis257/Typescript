/**
 * You're given a string of words. 
 * You need to find the word "Nemo", and return a string like so: "I found Nemo at X!", X is the index of the word.
 * If you can't find Nemo, return "I can't find Nemo :(".
 */

function findingNemo(input: string):string { 
    let index=input.split(" ").indexOf("Nemo");
    if(index>=0)
    {

        return "I found Nemo at "+ index +"!";
    }
    else return "I can't find Nemo :(";
}

export { findingNemo };