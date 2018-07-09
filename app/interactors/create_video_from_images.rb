class CreateVideoFromImages
  include Interactor

  delegate :video, to: :context

  def call
    video.processing!

    download_images
    generate_raw_video
  end

  private

  def download_images
    downloader = ImageDownloader.new(video)
    downloader.download_images
  end

  def generate_raw_video
    generator = VideoGenerator.new(video)
    generator.generate_raw_video
  end
end
