class CreateVideoFromImages
  include Interactor

  def call
    context.video.processing!

    download_images
  end

  def download_images
    downloader = ImageDownloader.new
    context.video.image_srcs.each do |image_url|
      downloader.download('myfolder', 'image001.png', image_url)
    end
  end
end
