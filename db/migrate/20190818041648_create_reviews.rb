class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :bench_id, null: false
      t.integer :rating, null: false
      t.string :body, default: "", null: false
      t.timestamps
    end
    add_index :reviews, :bench_id
  end
end
