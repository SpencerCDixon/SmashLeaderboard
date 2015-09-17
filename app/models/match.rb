class Match < ActiveRecord::Base
  belongs_to :player_one, class_name: 'User', foreign_key: :p_one_id
  belongs_to :player_two, class_name: 'User', foreign_key: :p_two_id
  belongs_to :player_three, class_name: 'User', foreign_key: :p_three_id
  belongs_to :player_four, class_name: 'User', foreign_key: :p_four_id
end
