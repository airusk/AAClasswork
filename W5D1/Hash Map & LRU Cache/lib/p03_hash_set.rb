class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if @count == @num_buckets - 1
      @num_buckets *= 2
      resize!
    end
    unless self.include?(key)
      self[key] << key
      @count += 1
    end
  end

  def include?(key)
    i = key.hash % @num_buckets
    @store[i].include?(key)
  end

  def remove(key)
    if self.include?(key)
      self[key].delete(key.hash)
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    temp = Array.new(@num_buckets) { Array.new }
    @store.each do |inner_arr|
      inner_arr.each do |key|
        temp[key.hash % @num_buckets] << key
      end
    end
    @store = temp
  end
end

# def initialize(num_buckets = 20)
#     @store = Array.new(num_buckets) { Array.new }
#     @count = 0
#     @num_buckets = num_buckets
#   end

#   def insert(num)
#     if @count == @num_buckets - 1
#       @num_buckets *= 2
#       resize!
#     end
#     unless self.include?(num)
#       self[num] << num 
#       @count += 1
#     end
#   end

#   def remove(num)
#     if self.include?(num)
#       self[num].delete(num)
#       @count -= 1
#     end
#   end

#   def include?(num)
#     i = num % @num_buckets
#     @store[i].include?(num)
#   end

#   private

#   def [](num)
#     @store[num % num_buckets]
#     # optional but useful; return the bucket corresponding to `num`
#   end

#   def num_buckets
#     @store.length
#   enddef initialize(num_buckets = 20)
#     @store = Array.new(num_buckets) { Array.new }
#     @count = 0
#     @num_buckets = num_buckets
#   end

#   def insert(num)
#     if @count == @num_buckets - 1
#       @num_buckets *= 2
#       resize!
#     end
#     unless self.include?(num)
#       self[num] << num 
#       @count += 1
#     end
#   end

#   def remove(num)
#     if self.include?(num)
#       self[num].delete(num)
#       @count -= 1
#     end
#   end

#   def include?(num)
#     i = num % @num_buckets
#     @store[i].include?(num)
#   end

#   private

#   def [](num)
#     @store[num % num_buckets]
#     # optional but useful; return the bucket corresponding to `num`
#   end

#   def num_buckets
#     @store.length
#   end
