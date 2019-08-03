class ChangeColumnNames < ActiveRecord::Migration[5.2]
  def change
    rename_column :events, :beginDay, :begin_day
    rename_column :events, :beginMonth, :begin_month
    rename_column :events, :beginYear, :begin_year
    rename_column :events, :endDay, :end_day
    rename_column :events, :endMonth, :end_month
    rename_column :events, :endYear, :end_year
    add_column :events, :begin_time, :integer
    add_column :events, :end_time, :integer
  end
end
