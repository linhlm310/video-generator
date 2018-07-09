class GenerateVideoWorker
  include Sidekiq::Worker

  def perform(video_id)
    video = Video.find_by(id: video_id)
    if video && video.unprocessed?
      GenerateVideo.call(video: video)
    else
      Rails.logger.info "Video not found (#{video_id})"
    end
  end
end
