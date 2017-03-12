class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :contents, :created_at, :updated_at

  has_one :user_id
end
