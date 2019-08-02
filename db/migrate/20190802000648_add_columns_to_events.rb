class AddColumnsToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :beginDay, :integer
    add_column :events, :beginMonth, :integer
    add_column :events, :beginYear, :integer
    add_column :events, :endDay, :integer
    add_column :events, :endMonth, :integer
    add_column :events, :endYear, :integer
  end
end
