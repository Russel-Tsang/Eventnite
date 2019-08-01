class ChangeColumns < ActiveRecord::Migration[5.2]
  def change
    change_column_null :events, :street, true
    change_column_null :events, :city, true
    change_column_null :events, :state, true
    change_column_null :events, :zip_code, true
  end
end
