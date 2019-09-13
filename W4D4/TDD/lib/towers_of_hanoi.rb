class Stack
  def initialize
    @store = []
  end

  def shift
    store.shift
  end

  def add(disc)
    store.unshift(disc)
  end

  def peek
    store.dup.first
  end

  private

  attr_reader :store

end

class Game
  attr_reader :board
  def initialize
    @board = { A: Stack.new, B: Stack.new, C: Stack.new }
  end

  def move

  end

  def won?
    if board[:C] == [1, 2, 3]
      puts "you have won"
      true
    else
      false
    end
  end

  def play
    puts "#{board}"
    puts "Enter stack name (A or B or C)"
    
  end
end