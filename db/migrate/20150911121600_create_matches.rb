class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :p_one_id
      t.integer :p_two_id
      t.integer :p_three_id
      t.integer :p_four_id
      t.integer :winner_id
      t.integer :p_one_char_id
      t.integer :p_two_char_id
      t.integer :p_three_char_id
      t.integer :p_four_char_id

      t.timestamps null: false
    end
  end
end
