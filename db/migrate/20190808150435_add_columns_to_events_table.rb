class AddColumnsToEventsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :venue_name, :string, null: false
    add_column :events, :refund_status, :boolean, default: true
  end
end
