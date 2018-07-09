class CreateVideoFromImages
  include Interactor

  def call
    context.video.processing!

    download_images
  end

  private

  def download_images
    downloader = ImageDownloader.new('myfolder')
    context.video.image_srcs.each_with_index do |image_url, index|
      downloader.download(get_image_name(index + 1), image_url)
    end
  end

  def get_image_name(index)
    formatted_index = format('%03d', index % 1000)
    "image#{formatted_index}.png"
  end
end
