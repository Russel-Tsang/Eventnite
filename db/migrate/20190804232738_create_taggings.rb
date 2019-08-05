class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end
    add_index :taggings, [:tag_id, :event_id]
  end
end
