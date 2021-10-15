const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const bordStart: string[] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
let bord: string[] = bordStart.slice();
let player: string = "X";
Start();
// end() can be called if you want to end the game and exit

function Start(): void {
  console.clear();
  console.log("Tic tac toe game has begun");
  console.log(bord);
  getTurn();
}

function getTurn(): void {
  for (let i = 0; i < 9; i++) {
    rl.question("It is now " + player + " turn" + "\nEnter value from 1 to 9 : ",
      (answer: number) => {
        movemade(answer);
        getTurn();
      });
  }
}

function movemade(answer: number): void {
  let copyAnswer = answer - 1
  for (let i = 0; i < 9; i++) {
    if (copyAnswer === i && bord[i] === ".") {
      bord[copyAnswer] = player;
      if (player === "X") {
        console.log(bord);
        player = "O";
      }
      else if (player === "O") {
        console.log(bord);
        player = "X";
      }
    }
  }
  let winner = getWinner()
  if (winner != ".") {
    console.log("winner is " + winner);
    end();
  }
  else isTie();
}

function getWinner(): string {
  if (bord[0] === bord[1] && bord[1] === bord[2]) {
    if (bord[0] === ".") {
      return ".";
    }
    else
    return bord[0];
  }
  else if (bord[3] === bord[4] && bord[4] === bord[5]) {
    if (bord[3] === ".") {
      return ".";
    }
    else
    return bord[3];
  }
  else if (bord[6] === bord[7] && bord[7] === bord[8]) {
    if (bord[6] === ".") {
      return ".";
    }
    else
    return bord[6];
  }
  else if (bord[0] === bord[3] && bord[3] === bord[6]) {
    if (bord[0] === ".") {
      return ".";
    }
    else
    return bord[0];
  }
  else if (bord[1] === bord[4] && bord[4] === bord[7]) {
    if (bord[1] === ".") {
      return ".";
    }
    else
    return bord[1];
  }
  else if (bord[2] === bord[5] && bord[5] === bord[8]) {
    if (bord[2] === ".") {
      return ".";
    }
    else
    return bord[2];
  }
  else if (bord[0] === bord[4] && bord[4] === bord[8]) {
    if (bord[0] === ".") {
      return ".";
    }
    else
    return bord[0];
  }
  else if (bord[2] === bord[4] && bord[4] === bord[6]) {
    if (bord[2] === ".") {
      return ".";
    }
    else
    return bord[2];
  }
  else {
    return ".";
  }
}

function isTie() {
  if (getWinner() === "." && !bord.includes(".")) {
    console.log("The game is draw");
    end();
  }
}

function end(): void {
  rl.question("Do you want to play y-yes/n-no? = ", (answer: string) => {
    if (answer === "y") {
      bord = [...bordStart];
      Start();
    }
    else if (answer === "n") {
      console.log("bye,see you next time.");
      close();
    }
    else console.log("ivailed input");
    end();
  })
}

