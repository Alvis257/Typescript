/**
 * You have decided to teach programming at a kindergarten, but you cannot understand half of what the children are saying.
 * Write a function that reverses all the words in a sentence that start with a particular letter.
 */

function kindergarten(sentence: string, letter: string) {
    let newSentence=sentence.split(" ");

    for (let i = 0; i < newSentence.length; i++) {
       for (let j = 0; j < newSentence[i].length; j++) {
           if(newSentence[i][0]===letter)
           {
            newSentence[i]= newSentence[i].split('').reverse().join('');
           break;
           }
           break;
       }
    }
    return newSentence.join(" ");
 }

export { kindergarten };