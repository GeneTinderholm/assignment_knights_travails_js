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
      lu: {x: this.start.x - 2, y: this.start.y - 1},
      ru: {x: this.start.x + 2, y: this.start.y - 1},
      ld: {x: this.start.x - 2, y: this.start.y + 1},
      rd: {x: this.start.x + 2, y: this.start.y + 1},
      ul: {x: this.start.x - 1, y: this.start.y - 2},
      dl: {x: this.start.x - 1, y: this.start.y + 2},
      ur: {x: this.start.x + 1, y: this.start.y - 2},
      dr: {x: this.start.x + 1, y: this.start.y + 2},
    };
  }
  nextMove() {
    if (this.depth === 63) {
      console.log('ding');
      return {result: true, stack: [this.start]};
    }
    let result = false;
    for (let i = 0; i < 8; i++) {
      let moveAbrv = this.moves.pop();
      let nextPosition = this.actions[moveAbrv];
      if (
        between(nextPosition.x, 0, 7) &&
        between(nextPosition.y, 0, 7) &&
        this.board[nextPosition.y][nextPosition.x]
      ) {
        let nextBoard = this.board;
        nextBoard[nextPosition.y][nextPosition.x] = 0;
        console.log(
          'depth: ',
          this.depth,
          '\nboard: \n',
          this.board,
          '\n start:',
          this.start,
          '\nmoves:',
          this.moves,
        );
        result = new Move(nextPosition, nextBoard, this.depth + 1).nextMove();
        if (result) {
          console.log('result: ', result, '\ndepth: ', this.depth);
          result.stack.push(this.start);
          break;
        }
      } else {
        console.log(nextPosition, '\n', this.board);
        continue;
      }
    }
    if (this.moves.length === 0) {
      console.log('out of moves');
      return false;
    }
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
      [1, 1, 1, 1, 1, 1, 1, 1],
    ];
    // this.moveStack = [];
  }
  gallop(y, x) {
    this.board[y][x] = 0;
    let result = new Move({x, y}, this.board, 0);
    console.log(result);
    return result.nextMove();
  }
}

let SirShartsALot = new Knight();
SirShartsALot.gallop(3, 3);
