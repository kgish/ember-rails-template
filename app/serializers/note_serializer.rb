class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :contents, :created_at, :updated_at

  belongs_to :user

  # link(:self) { note_url(object) }
end
