class EditTags < ActiveRecord::Migration[5.2]
  def change
    remove_column :tags, :event_id
  end
end
