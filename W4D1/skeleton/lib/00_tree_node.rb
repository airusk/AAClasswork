require "byebug"
class PolyTreeNode
  attr_reader :parent, :value
  attr_accessor :children

  def initialize(value)
    @parent = nil
    @children = []
    @value = value
  end

  def parent=(node)
    old_par = @parent
    if old_par != nil
      old_par.children.delete(self)
    end
    @parent = node
    unless @parent == nil || node.children.include?(self)
        node.children << self
    end
  end

  def add_child(child)
    if child.parent != self
      child.parent = self
    end
  end

  def remove_child(child)
    raise "orphan" if child.parent == nil
    if child.parent == self
      child.parent = nil
    end

  end

  def dfs(target_value)
    return self if self.value == target_value

    self.children.each do |child|
      child_search = child.dfs(target_value)
      return child_search if child_search 
    end
    
    nil
  end

  def bfs(target_value)
    queue = [self]
    until queue.empty?
      curr_node = queue.shift

      return curr_node if curr_node.value == target_value

      curr_node.children.each{|child| queue.push(child)}
    end
    nil
  end


  def inspect
    "#{self.value} / #{self.parent} / #{self.children}"
  end
  

end

class MyQueue
    def initialize
      @store = []
    end

    def enqueue(el)
      @store.push(el)
      self
    end

    def dequeue
      @store.shift
    end

    def size
      @store.length
    end

    def show
      @store.dup
    end
  end
# one = PolyTreeNode.new("a")
# one.add_child(two = PolyTreeNode.new("b"))
# one.add_child(three = PolyTreeNode.new("c"))
# two.add_child(four = PolyTreeNode.new("d"))
# two.add_child(five = PolyTreeNode.new("e"))
# three.add_child(six = PolyTreeNode.new("f"))
# three.add_child(seven = PolyTreeNode.new("g"))

# p one.dfs("e")

#    a
# b    c
#d e  f g
