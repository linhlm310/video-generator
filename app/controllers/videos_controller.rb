class VideosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    video = Video.new(video_params)
    unless video.save
      render json: { errors: video.errors }, status: :unprocessable_entity
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :content, image_srcs: [])
  end
end
