class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :content
      t.string :image_srcs, array: true, default: []

      t.timestamps
    end
  end
end
