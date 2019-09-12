module Steppable
  def moves
    row, col = pos
    move_diffs.map {|el| [el[0] + row, el[1] + col]}
  end
  private
  def move_diffs
    raise "Error: create move_diffs for me"
  end
end

module Slideable
  def horizontal_dirs
    range = []
    (0..7).each do |i|
      range << [i, pos[1]] if i != pos[0]
      range << [pos[0], i] if i != pos[1]
    end
    range
  end

  def moves
    if self.is_a?(Rook)
      return horizontal_dirs
    end
  end
end
