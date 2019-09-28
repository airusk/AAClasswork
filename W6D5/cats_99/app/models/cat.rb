# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'date'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper
  validates :birth_date, :color, :name, :sex, presence: true

  def age
    time_ago_in_words(birth_date)
  end
end
