class PostSub < ApplicationRecord
  validates :post_id, uniqueness: {scope: :sub_id}, presence: true
  validates :sub_id, presence: true 
  belongs_to :post 
  belongs_to :sub 

end
