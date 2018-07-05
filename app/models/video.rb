# frozen_string_literal: true

class Video < ActiveRecord::Base
  validates :title, presence: true
end
