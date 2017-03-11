class User < ApplicationRecord
  has_secure_token
  has_secure_password

  validates :firstname, presence: true
  validates :lastname, presence: true

  EMAIL_REGEX = /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  validates :email, presence: true
  validates :email, format: EMAIL_REGEX

  has_many :notes
end
