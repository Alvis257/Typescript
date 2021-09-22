export type XO = "X" | "O" | "-";

export class Game {
  gameEnd: boolean = false;

  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    const countX = this.cells.filter(cell => cell === "X").length;
    const countO = this.cells.filter(cell => cell === "O").length;
    if (countX === countO) {
      return "X";
    }
    else return "O";
  }

  getWinner(): XO {
    if (this.cells[0] === this.cells[1] && this.cells[1] === this.cells[2]) {
      if (this.cells[0] === "-") {
        return "-";
      }
      else
        this.gameEnd = true;
      return this.cells[0];
    }
    else if (this.cells[3] === this.cells[4] && this.cells[4] === this.cells[5]) {
      if (this.cells[3] === "-") {
        return "-";
      }
      else
        this.gameEnd = true;
      return this.cells[3];
    }
    else if (this.cells[6] === this.cells[7] && this.cells[7] === this.cells[8]) {
      if (this.cells[6] === "-") {
        return "-";
      }
      else
        this.gameEnd = true;
      return this.cells[6];

    }
    else if (this.cells[0] === this.cells[3] && this.cells[3] === this.cells[6]) {
      if (this.cells[0] === "-") {
        return "-";
      }
      else
        this.gameEnd = true;
      return this.cells[0];
    }
    else if (this.cells[1] === this.cells[4] && this.cells[4] === this.cells[7]) {
      if (this.cells[1] === "-") {
        return "-";
      }
      else
        this.gameEnd = true;
      return this.cells[1];
    }
    else if (this.cells[2] === this.cells[5] && this.cells[5] === this.cells[8]) {
      if (this.cells[2] === "-") {
        return "-";
      }
      else
        this.gameEnd = true;
      return this.cells[2];
    }
    else if (this.cells[0] === this.cells[4] && this.cells[4] === this.cells[8]) {
      if (this.cells[0] === "-") {
        return "-";
      }
      else
        this.gameEnd = true;
      return this.cells[0];
    }
    else if (this.cells[2] === this.cells[4] && this.cells[4] === this.cells[6]) {
      if (this.cells[2] === "-") {
        return "-";
      }
      else
        this.gameEnd = true;

      return this.cells[2];
    }
    else {
      return "-";
    }
  }

  isTie(): boolean {
    if (this.getWinner() == "-" && !this.cells.includes("-")) {
      return true;
    }
    else return false;
  }

  onClick(i: number): void {
    if (this.gameEnd === false) {
      if (this.cells[i] === "-") {
        this.cells[i] = this.getTurn();
      }
    }
    else this.restart;
  }

  restart(): void {
    this.gameEnd = false;
    console.log(this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  }
}
