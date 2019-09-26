class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    # add_column :table_name, :column_name, :type, options_hash
    # remove_column :table_name, :column_name
    # rename_column :table_name, :old_column_name, :new_column_name
    # rename_table :old_table_name, :new_table_name
    # add_index :table_name, [:column1, :column2], options_hash
    # change_column :table_name, :column_name, :type, options_hash
    create_table :users do |t|
      t.string :username, null: false
      t.timestamps
    end

    add_index :users, :username, unique: true
  end
end
