class Card
  attr_reader :value, :face_up

  def initialize(value, face_up = false)
    @value = value
    @face_up = face_up
  end

  
end