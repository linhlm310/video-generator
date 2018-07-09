# frozen_string_literal: true

class Video < ActiveRecord::Base
  enum status: [ :unprocessed, :processing, :processed ]

  validates :title, presence: true

  after_initialize :generate_key
  after_create :generate_video

  private

  def generate_key
    return if key.present?

    today = Date.today.to_s
    same_day_videos_count = Video.where('key LIKE ?', "#{today}%").count
    formatted_video_index = format('%03d', (same_day_videos_count + 1))
    self.key = "#{today}-#{formatted_video_index}"
  end

  def generate_video
    GenerateVideoWorker.perform_async(id)
  end
end
