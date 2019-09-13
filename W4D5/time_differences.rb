require "byebug"
# def my_min(arr)
#   min = arr[0]
#   arr.each do |ele1|
#     arr.each do |ele2|
#       if ele1 < ele2 && ele1 < min
#         min = ele1
#       end
#     end
#   end
#   min
# end


# def my_min(arr)
#   min = arr[0]
#   (0...arr.length-1).each do |i|
#     min = arr[i] if arr[i] < min
#   end
#   min
# end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

# def largest_contiguous_subsum(arr)
#   subs = []
#   (0...arr.length - 1).each do |i|
#     (i+1...arr.length).each do |i2|
#       subs << arr[i..i2].sum
#     end
#   end

#   subs.max
# end

# def largest_contiguous_subsum(arr)
#   largest = arr[0]
#   curr = arr[0]
#   (0...arr.length-1).each do |i|
#     #debugger
#     if curr < curr + arr[i+1]
#       curr += arr[i+1]
#       if curr > largest
#         largest = curr
#       end
#     else
#       curr = arr[i]
#     end
#   end
#   largest
# end


# def largest_contiguous_subsum(arr)
#   largest = arr[0]
#   (0...arr.length-1).each do |i|
#     curr = arr[i]
    
#     if curr < curr + arr[i+1] && arr[i + 1] > 0
#       curr += arr[i+1]
#     elsif curr > largest
#         largest = curr
#     end
#   end
#   largest
# end

def largest_contiguous_subsum(arr)
  largest = arr[0]
  curr = arr[0]
  (1...arr.length).each do |i|
    if curr < 0
      curr = 0
    end
    curr += arr[i]
    largest = curr if curr > largest
  end
largest
end



p largest_contiguous_subsum([5, 3, -7]) #=> 8
p largest_contiguous_subsum([2, 3, -6, 7, -6, 7]) #=> 8

list = [-5, -1, -3]

p largest_contiguous_subsum(list)