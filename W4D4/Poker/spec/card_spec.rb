require "rspec"
require "card"

RSpec.describe Card do
  subject(:card) { Card.new(10) }
  describe "#initialize" do
    it "sets a value" do
      expect(card.value).to eq(10)
    end

    it "sets a boolean" do 
      expect(card.face_up).to be false
    end
  end
end