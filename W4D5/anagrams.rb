# def first_anagram?(str1, str2)
#   subs = []
#   word1 = str1.split("")
#   (0...word1.length).each do |i|
#     new_str = ""
#     until new_str.length == word1.length
#       # new_str += word1.rand(0...word1.length)
#       new_str += word1.sample
#       last_char = word1.index(new_str[-1])
#       word1.delete_at(last_char)
#     end
#     subs << new_str
#   end
#   subs
# end


# def first_anagram?(str1, str2)
#   subs = []

#   str1.each_char.with_index do |char, idx|
#     new_str1 = str1.dup
#     (idx+1...str1.length).each do |j|
#       new_str1[j] = char
#       new_str1[idx] = str1[j]
#     end
#     subs << new_str1
#   end
#   subs
# end

def first_anagram?(str1, str2)
  length = str1.length * str1.length
  subs = []
  
  length.times do 

    shuff = str1.split("")shuffle
    subs << shuff.join("") if !subs.include?(shuff)
  end
  
  subs
end


p first_anagram?("gizmo", "sally")    #=> false
p first_anagram?("elvis", "lives")    #=> true