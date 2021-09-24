
// const voters[ {
//           numYoungVotes,
//           numYoungPeople,
//           numMidVotesPeople,
//           numMidsPeople,
//           numOldVotesPeople,
//           numOldsPeople
//       }
//     ];
interface People {
    name: string
    age: number
    voted: boolean
};

let voterRange = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
};

//   ages 18-25, how many from 26-35, how many from 36-55, 
function voterResults(arr: People[]): any {
    arr.forEach(function (voter: People) {
        if (voter.age >= 18 && voter.age <= 25) {
            voterRange.numYoungPeople++;
            if (voter.voted === true) {
                voterRange.numYoungVotes++;
            }
        }
        else if (voter.age >= 26 && voter.age <= 35) {
            voterRange.numMidsPeople++;
            if (voter.voted === true) {
                voterRange.numMidVotesPeople++;
            }
        }
        else if (voter.age >= 36 && voter.age <= 55) {
            voterRange.numOldsPeople++;
            if (voter.voted === true) {
                voterRange.numOldVotesPeople++;
            }
        }
    });
    return voterRange;
}

const voters1 = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
];

console.log(voterResults(voters1)); // Returned value shown below:

//   {
//       numYoungVotes: 1,
//       numYoungPeople: 4,
//       numMidVotesPeople: 3,
//       numMidsPeople: 4,
//       numOldVotesPeople: 3,
//       numOldsPeople: 4
//   }