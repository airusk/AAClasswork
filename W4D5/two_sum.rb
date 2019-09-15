def hash_two_sum?(arr, target)
    complements = {} #by default, hash keys => nil/null some falsey value
    arr.each do |num|
        return true if complements[num]
        complements[target-num] = true
    end
    false
end

arr = [0, 1, 5, 7]
p hash_two_sum?(arr, 6) # => should be true
p hash_two_sum?(arr, 10) # => should be false