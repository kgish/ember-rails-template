require 'faker'

User.delete_all

User.create(
    firstname: 'Kiffin',
    lastname: 'Gish',
    email: 'kiffin.gish@planet.nl',
    description: 'A future famous golfer',
    password: 'kiffin',
    admin: true
)

15.times do

  firstname = Faker::Name.first_name

  user = User.create(
    firstname: firstname,
    lastname: Faker::Name.last_name,
    email: Faker::Internet.email,
    description: Faker::Lorem.sentence(4),
    password: firstname.downcase,
    admin: false
  )

  rand(0..5).times do

    note = Note.create(
      title: Faker::Lorem.words(rand(2..5)),
      contents: Faker::Lorem.sentences(rand(1..5)),
      user: user
    )
  end


end
