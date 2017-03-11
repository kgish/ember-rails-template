class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :description, :created_at
  has_many :notes
  link(:self) { user_url(object) }
end
