require 'open-uri'

class ImageDownloader
  def initialize(folder_name)
    @base_file_path = "inputs/#{folder_name}"
    FileUtils.mkdir_p(@base_file_path) unless File.exist?(@base_file_path)
  end

  def download(file_name, url)
    open("#{@base_file_path}/#{file_name}", 'wb') do |file|
      file << open(url).read
    end
  end
end
