require_relative "./poly_tree_node/lib/00_tree_node.rb"

class KnightPathFinder
  attr_accessor :root_node

  def self.valid_moves(pos)
    #return array of valid moves
    x, y = pos
    
    valid_moves = [
      [x+2,y+1],[x+1,y+2],
      [x-2,y+1],[x-1,y+2],
      [x+2,y-1],[x+1,y-2],
      [x-2,y-1],[x-1,y-2]
    ]

    valid_moves.select do |move|
      move.all? do |ele|
        ele < 8 && ele >= 0
      end
    end 
  end

  def initialize(start_pos)
    @considered_positions = []
    @root_node = PolyTreeNode.new(start_pos)
    self.build_move_tree
  end

  def build_move_tree
    queue = MyQueue.new
    queue.enqueue(@root_node)

    until queue.size == 0
      curr_node = queue.dequeue

      new_moves = new_move_positions(curr_node.value)

      new_moves.each do |pos| 
        new_node =  PolyTreeNode.new(pos)
        queue.enqueue(new_node)
        new_node.parent = curr_node
      end
    end
    @root_node
  end

  def new_move_positions(pos)
    #valid_moves = array of moves
    valid_moves = KnightPathFinder.valid_moves(pos)

    #removing moves that are already in @considered_positions
    valid_moves.select!{|move|!@considered_positions.include?(move)}

    #add valid_moves to @considered_positions
    @considered_positions += valid_moves
    return valid_moves
  end

  def find_path(end_pos)
    end_node = @root_node.dfs(end_pos)
    trace_path_back(end_node) + [end_pos] 
  end
  
  def trace_path_back(node)
    if node.parent.nil?
      return []
    else
      return trace_path_back(node.parent) + [node.parent.value]
    end
  end

end

kpf = KnightPathFinder.new([0,0])
# kpf.root_node.children.each {|node| p node.value}
p kpf.find_path([7,6])

