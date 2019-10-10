class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password 

  before_validation :ensure_token 

  has_many :posts,
    foreign_key: :user_id,
    class_name: :Post
  
  has_many :subs,
    foreign_key: :user_id,
    class_name: :Sub

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save 
    self.session_token
  end

  def ensure_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
