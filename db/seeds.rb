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

users = [
  { first: "Spencer", last: "Dixon" },
  { first: "Joel", last: "Sutherland" },
  { first: "Dan", last: "Spitz" },
  { first: "Frank", last: "Zhu" },
  { first: "Jacob", last: "Horwitz" },
  { first: "Chris", last: "Moses" },
]

users.each do |user_hash|
  User.create(
    first_name: user_hash[:first],
    last_name:  user_hash[:last],
    email: "#{user_hash[:first]}@smartscheduling.io",
    password: "password",
    password_confirmation: "password"
  )
end

