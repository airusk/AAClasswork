class Array
  def my_uniq
    self.uniq
  end

  def two_sum
    arr = []
    (0...self.length - 1).each do |i1|
      (i1+1...self.length).each do |i2|
        arr << [i1, i2] if self[i1] + self[i2] == 0 
      end
    end
    arr
  end

  def my_transpose
    self.transpose
  end

  def stock_picker
    raise "you no stock" if self.empty?
    arr = []
    curr_diff = 0
    (0...self.length-1).each do |i|
      (i+1...self.length).each do |j|
        first_diff = self[j] - self[i]
        if first_diff > curr_diff
          curr_diff = first_diff 
          arr = [i,j]
        end
      end
    end
    arr
  end

end