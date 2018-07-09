class CreateVideoFromImages
  include Interactor

  delegate :video, to: :context

  def call
    video.processing!

    download_images
  end

  private

  def download_images
    downloader = ImageDownloader.new(video.key)
    video.image_srcs.each_with_index do |image_url, index|
      downloader.download(get_image_name(index + 1), image_url)
    end
  end

  def get_image_name(index)
    formatted_index = format('%03d', index)
    "image#{formatted_index}.png"
  end
end
