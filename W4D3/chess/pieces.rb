require_relative "modules"

class Piece
  attr_accessor :pos, :color
  def initialize(color, pos)
    @color = color
    #@board = board
    @pos = pos
  end
  
end

class NullPiece < Piece
  include Singleton
  def initialize
  end
end

class Knight < Piece
  include Steppable
  KNIGHT_MOVES = [[1,2],[-1,2],[-2,1],[-2,-1],
                  [-1,-2],[1,-2],[2,-1],[2,1]]
  
  def move_diffs
    KNIGHT_MOVES
  end
end


class King < Piece
  include Steppable
  KING_MOVES = [[0,1],[-1,1],[-1,0],[-1,-1],
                [0,-1],[1,-1],[1,0],[1,1]]

  def move_diffs
    KING_MOVES
  end
end

class Rook < Piece
  include Slideable
  # def move_range
  #   range = []
  #   (0..7).each do |i|
  #     range << [i, pos[1]] if i != pos[0]
  #     range << [pos[0], i] if i != pos[1]
  #   end
  #   range
  # end
end