class UserResource < JSONAPI::Resource
  attributes :firstname, :lastname, :email, :details
end
