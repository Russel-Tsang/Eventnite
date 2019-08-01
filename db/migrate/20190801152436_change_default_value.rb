class ChangeDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:events, :online_event, false)
  end
end
