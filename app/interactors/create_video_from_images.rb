class CreateVideoFromImages
  include Interactor

  delegate :video, to: :context

  def call
    video.downloading_images!
    download_images
    video.generating_raw_version!
    generate_raw_video
  end

  private

  def download_images
    downloader = ImageDownloader.new(video)
    downloader.download_images
  end

  def generate_raw_video
    video_generator = VideoGenerator.new(video)
    video_generator.generate_raw_video
    context.video_generator = video_generator
  end
end
