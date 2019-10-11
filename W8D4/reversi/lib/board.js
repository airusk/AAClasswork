let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {

  let grid=[];

  for (let i = 0; i<8;i++){
    let rows = [];
      for( let j=0; j<8; j++){
        rows.push(undefined);
      }
    grid.push(rows);
  }

  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white"); 
  grid[4][4] = new Piece("white"); 

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  // pos = [row,col]
  let row = pos[0];
  let col = pos[1];
  if (row < 8 && row >= 0 && col < 8 && col >= 0){
    return this.grid[row][col];
  }
  else{
    throw new Error("Not valid pos!");
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos);
  if (piece === undefined) return false;
  if (piece.color === color) return true;
  return false;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let piece = this.getPiece(pos);
  if (piece === undefined) return true;
  return false;
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let row = pos[0];
  let col = pos[1];
  if (row < 8 && row >= 0 && col < 8 && col >= 0) {
    return true;
  }
  else {
    return false;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) { 

  let new_pos = [pos[0] + dir[0], pos[1] + dir[1]];
  if (this.isValidPos(new_pos) === false) return null;
  let nextPiece = board.getPiece(new_pos);
  // invalid terminating cases
  if (nextPiece === undefined || !board.isValidPos(pos)|| (nextPiece.color === color && piecesToFlip.length === 0)){
    return null;
  }
  // valid terminating condition
  if (nextPiece.color === color && piecesToFlip.length > 0 ) return piecesToFlip;
  // continue
  piecesToFlip.push(new_pos);
  return _positionsToFlip(board, new_pos, color, dir, piecesToFlip);
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMove(pos,color)){
    throw new Error("Not valid move!");
  } else {
    let row=pos[0];
    let col = pos[1];
    this.grid[row][col]= new Piece(color);
    this.flippyFloppy(pos,color);
  }

};

Board.prototype.flippyFloppy = function(pos,color){
  let result=[];
  let possibleMoves=[];
  for (let i = 0; i < Board.DIRS.length; i++) {
    const dir = Board.DIRS[i];
    // board, pos, color, dir, piecesToFlip
    result.push(_positionsToFlip(this, pos, color, dir, possibleMoves));
    possibleMoves = [];
  }
  for (let i = 0; i < result.length; i++) {
    const pos = result[i];
    if (pos !== null) { 
      for (let j = 0; j < pos.length; j++) {
        let piece = this.getPiece(pos[j]);
        piece.color = color;
      }
      // piece = this.getPiece(pos[0]);
      // piece.color= color;

    }
  }

};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (!this.isValidPos(pos)) return false;
  if (!this.isOccupied(pos)) return false;

  let possibleMoves = [];
  for (let i = 0; i < Board.DIRS.length; i++) {
    const dir = Board.DIRS[i];
    // board, pos, color, dir, piecesToFlip
    let result = _positionsToFlip(this,pos,color,dir,possibleMoves);
    possibleMoves=[];
    if(result !== null) return true;
  }
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let arr=[];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if(this.validMove([i,j], color)){
        arr.push([i,j]);
      }
    }
  }
  console.log(arr);
  return arr;
};

module.exports = Board;
