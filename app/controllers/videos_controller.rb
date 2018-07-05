class VideosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    video = Video.new
    video.save

    render json: { errors: video.errors }, status: :unprocessable_entity
  end
end
