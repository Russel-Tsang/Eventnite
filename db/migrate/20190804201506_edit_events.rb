class EditEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :price, :integer
    remove_column :events, :tags
    remove_column :tags, :user_id
  end
end
