require 'singleton'
require 'byebug'
require_relative 'pieces'

class Board
  def initialize
    @grid = Array.new(8) {Array.new(8,NullPiece.instance)}
    # indices = [0,1,6,7]
    # (0..7).each do |i|
    #   if indices.include?(i)
    #     @grid[i].map!{Piece.new}
    #   end
    # end
  end

  def move_piece(start_pos, end_pos)
    start_piece = self[start_pos]
    moves = start_piece.moves
    if valid_moves(moves).include?(end_pos)
      self[end_pos], self[start_pos] = self[start_pos], self[end_pos]
      start_piece.pos = end_pos
    end
    # if self[start_pos] == NullPiece.instance
    #   raise "Error: nothing to move"
    # elsif self[end_pos] != NullPiece.instance
    #   raise "Error: piece already in end_pos"
    # end
  end

  def valid_moves(moves)
    moves.select {|el| (0..7).include?(el[0]) && (0..7).include?(el[1])}
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, val)
    row, col = pos
    @grid[row][col] = val
  end
end

board = Board.new
rook = Rook.new(:w, [0,0])
board[[0,0]] = rook
board.move_piece(rook.pos,[0,6])
p board



