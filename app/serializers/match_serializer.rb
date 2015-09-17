class MatchSerializer < ActiveModel::Serializer
  attributes :id, :player_one, :player_two, :player_three, :player_four

  def player_one
    object.player_one.try(:full_name)
  end

  def player_two
    object.player_two.try(:full_name)
  end

  def player_three
    # Huge anti-pattern, don't know proper solution
    object.player_three.try(:full_name)
  end

  def player_four
    object.player_four.try(:full_name)
  end
end
