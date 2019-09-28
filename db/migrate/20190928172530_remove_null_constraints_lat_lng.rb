class RemoveNullConstraintsLatLng < ActiveRecord::Migration[5.2]
  def change
    change_column_null :events, :lat, true
    change_column_null :events, :lng, true
  end
end
