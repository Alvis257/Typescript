/**
 * Write a function that returns true if the given string ends with a question mark, false if not.
 * 
 * Example
 * 
 * Input: "French fries?"
 * Output: true
 */

function isQuestion(input: string):boolean { 
    let questionMark=false;
    let newString=input.indexOf("?")
    if(newString > -1)
    {
        return questionMark=true;
    }
    else return questionMark;
}

export { isQuestion };