function checkExam(examAnswer: string[], studentAnswer: string[]): number {
    let countAnswer = 0;
    studentAnswer.forEach(function (element: string, index: number) {
        if (element === examAnswer[index]) {
            countAnswer = countAnswer + 4;
        }
        else if (element != "") {
            countAnswer = countAnswer - 1;
        }
        else countAnswer = countAnswer + 0;
    });
    if (countAnswer > 0) {
        return countAnswer;
    }
    else return 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // => 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // => 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // => 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // => 0