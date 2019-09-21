

class ShortenedUrl < ApplicationRecord

  self.random_code 
    SecureRandom.urlsafe_base64
  end

end