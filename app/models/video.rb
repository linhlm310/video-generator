# frozen_string_literal: true

class Video < ActiveRecord::Base
  validates :title, presence: true

  after_create :generate_video

  def generate_video
    GenerateVideoWorker.perform(this)
  end
end
