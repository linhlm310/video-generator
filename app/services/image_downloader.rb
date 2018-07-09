require 'open-uri'

class ImageDownloader
  def initialize(video)
    @video = video
    @base_file_path = "inputs/#{@video.key}"
    FileUtils.mkdir_p(@base_file_path) unless File.exist?(@base_file_path)
  end

  def download_images
    @video.image_srcs.each_with_index do |image_url, index|
      download(get_image_name(index + 1), image_url)
    end
  end

  private

  def download(file_name, url)
    open("#{@base_file_path}/#{file_name}", 'wb') do |file|
      file << open(url).read
    end
  end

  def get_image_name(index)
    formatted_index = format('%03d', index)
    "image#{formatted_index}.jpg"
  end
end
