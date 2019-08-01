class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :type, null: false
      t.string :category, null: false
      t.string :tags
      t.string :organizer, null: false
      t.boolean :online_event, default: true
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :events, :user_id
  end
end
