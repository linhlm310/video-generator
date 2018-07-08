# frozen_string_literal: true

class Video < ActiveRecord::Base
  enum status: [ :unprocessed, :processing, :processed ]

  validates :title, presence: true

  after_create :generate_video

  private

  def generate_video
    GenerateVideoWorker.perform_async(id)
  end
end
