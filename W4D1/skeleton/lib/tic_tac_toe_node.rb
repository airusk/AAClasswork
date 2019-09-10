require_relative 'tic_tac_toe'
require "byebug"

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos, :children_nodes

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
    @children_nodes = []
  end

  def losing_node?(evaluator)
    return true if board.over? && board.winner != evaluator

    @children_nodes.any? { |child| child.board.losing_node?(evaluator) }
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    @board.rows.each.with_index do |row, i|
      row.each.with_index do |col, j|
        # debugger
        if col.nil? 
          next_step = @board.dup
          self.place_mark(next_step, [i,j], next_mover_mark)
          next_mover_mark == :x ? next_mover_mark = :o : next_mover_mark = :x
          @children_nodes << TicTacToeNode.new(next_step, next_mover_mark, [i,j])
        end
      end
    end

    @children_nodes
  end

  def place_mark(board, pos, mark)
    board[pos] = mark
  end
end

# tic = TicTacToe.new("bob", "jim")
# noding = TicTacToeNode.new(tic.board, :x)
# puts noding.children
# noding.children.each { |node| p node.children.each { |node_2| p node_2.board} }