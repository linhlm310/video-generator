class SubtitleGenerator
  def initialize(video)
    @video = video
    @base_file_path = "outputs/#{@video.key}"
    FileUtils.mkdir_p(@base_file_path) unless File.exist?(@base_file_path)
  end

  def generate
    path = "#{@base_file_path}/subtitles.srt"
    File.open(path, "w+") do |file|
      file.puts('1')
      file.puts('00:00:00,000 --> 00:00:04,827')
      file.puts @video.content.gsub(/\n/, '')
    end
  end
end
