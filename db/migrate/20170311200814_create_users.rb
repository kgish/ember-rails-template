class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :password_digest
      t.string :token
      t.text :description
      t.boolean :admin, default: false

      t.timestamps
    end
     add_index :users, :token, unique: true
  end
end
