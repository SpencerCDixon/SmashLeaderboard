# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

characters = [
  "Mario", "Luigi", "Samus", "Donkey Kong", "Marth", "Ness", "Link", "Zelda"
]

characters.each do |char|
  Character.find_or_create_by(name: char, image: "http://www.ssbwiki.com/images/8/83/Mario_SSBB.jpg")
end

8.times do
  User.create(email: Faker::Internet.email, password: "password", password_confirmation: "password")
end
