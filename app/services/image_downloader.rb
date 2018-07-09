require 'open-uri'

class ImageDownloader
  def download(folder_name, file_name, url)
    open(`#{folder_name}/#{file_name}`, 'wb') do |file|
      file << open(url).read
    end
  end
end
