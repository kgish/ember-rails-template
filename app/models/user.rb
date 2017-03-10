class User < ApplicationRecord
  EMAIL_REGEX = /^([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})$/i
  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, presence: true
  validates :email, format: EMAIL_REGEX
end