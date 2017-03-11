class Note < ApplicationRecord
  validates :title, presence: true
  validates :contents, presence: true

  belongs_to :user
end
