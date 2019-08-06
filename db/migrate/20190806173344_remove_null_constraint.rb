class RemoveNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :events, :description, true
  end
end
