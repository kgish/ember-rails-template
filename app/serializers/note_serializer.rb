class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :contents, :created_at
  has_one :user_id
  link(:self) { user_url(object) }
end
