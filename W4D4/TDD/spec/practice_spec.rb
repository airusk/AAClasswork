require "practice"
require "byebug"

RSpec.describe Array do
  subject(:array) {[1,2,1,3,3]}
  describe "#my_uniq" do
    it "should remove duplicates from an array" do
      # array = [1,2,1,3,3]
      expect(array.my_uniq).to eq(array.uniq)
    end
  end

  describe "#two_sum" do 
    it "should find all pairs of positions that sum to zero" do
      expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
    end
  end

  describe "#my_transpose" do
    it "should convert between a array between row and col" do
      expect([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
      ].my_transpose).to eq([[0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]])
    end
  end
  describe "#stock_picker" do
    it "should raise an error if array is empty" do
      expect{[].stock_picker}.to raise_error("you no stock")
    end

    it "should output the most profitable pair of days" do
        expect([50,100,50,1,1000,1000000,0].stock_picker).to eq([3,5])
    end
  end

  
end