class GenerateVideoWorker
  include Sidekiq::Worker

  def perform(video)
    GenerateVideo.call(video)
  end
end
