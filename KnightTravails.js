'use strict';

class Move {
  constructor(startPosition, board, depth) {
    this.start = startPosition;
    this.board = board;
    this.depth = depth;
    this.moves = [ul, ur, dl, dr, lu, ld, ru, rd];
    this.actions = {
      ul: { x: this.start.x - 2, y: this.start.y - 1 },
      ur: { x: this.start.x - 2, y: this.start.y + 1 },
      dl: { x: this.start.x + 2, y: this.start.y - 1 },
      dr: { x: this.start.x + 2, y: this.start.y + 1 },
      lu: { x: this.start.x - 1, y: this.start.y - 2 },
      ld: { x: this.start.x + 1, y: this.start.y - 2 },
      ru: { x: this.start.x - 1, y: this.start.y + 2 },
      rd: { x: this.start.x + 1, y: this.start.y + 2 }
    };
  }
}
