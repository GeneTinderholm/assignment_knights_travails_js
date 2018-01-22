'use strict';

const between = (x, low, high) => {
  return x >= low && x <= high;
};

class Move {
  constructor(startPosition, board, depth) {
    this.start = startPosition;
    this.board = board;
    this.depth = depth;
    this.moves = ['lu', 'ru', 'ld', 'rd', 'ul', 'dl', 'ur', 'dr'];
    this.actions = {
      lu: { x: this.start.x - 2, y: this.start.y - 1 },
      ru: { x: this.start.x + 2, y: this.start.y - 1 },
      ld: { x: this.start.x - 2, y: this.start.y + 1 },
      rd: { x: this.start.x + 2, y: this.start.y + 1 },
      ul: { x: this.start.x - 1, y: this.start.y - 2 },
      dl: { x: this.start.x - 1, y: this.start.y + 2 },
      ur: { x: this.start.x + 1, y: this.start.y - 2 },
      dr: { x: this.start.x + 1, y: this.start.y + 2 }
    };
  }
  nextMove() {
    if (this.depth === 63) {
      // console.log('ding');
      return { result: true, stack: [this.start] };
    }
    let result = false;
    for (let i = 0; i < 8; i++) {
      let nextBoard = this.board
        .slice(0)
        .map(subArray => subArray.slice(0).map(el => el));
      let moveAbrv = this.moves.pop();
      let nextPosition = this.actions[moveAbrv];
      if (
        between(nextPosition.y, 0, 7) &&
        between(nextPosition.x, 0, 7) &&
        this.board[nextPosition.x][nextPosition.y]
      ) {
        nextBoard[nextPosition.x][nextPosition.y] = 0;
        // console.log(
        //   'depth: ',
        //   this.depth,
        //   '\nboard: \n',
        //   this.board,
        //   '\n start:',
        //   this.start,
        //   '\nmoves:',
        //   this.moves
        // );
        let resultMove = new Move(nextPosition, nextBoard, this.depth + 1);
        result = resultMove.nextMove();
        if (result) {
          // console.log('result: ', result, '\ndepth: ', this.depth);
          // console.log('Pandas!!!!!!!!+++++++++===========================');
          result.stack.push(this.start);
          break;
        }
      } else {
        // console.log(nextPosition, 'm\n ', this.board);
        // nextBoard = this.board;
        // console.log('FAIL!!!!!!!!!!!!!!');
        continue;
      }
    }
    if (this.moves.length === 0) {
      console.log('out of moves');
      // nextBoard = this.board;
      return false;
    }
    console.log(`Results:======================= ${result}`);
    return result;
  }
}

class Knight {
  constructor() {
    this.board = [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ];
    // this.moveStack = [];
  }
  gallop(x, y) {
    this.board[x][y] = 0;
    let result = new Move({ x, y }, this.board, 0);
    console.log(result);
    return result.nextMove();
  }
}

let SirShartsALot = new Knight();
SirShartsALot.gallop(3, 3);
