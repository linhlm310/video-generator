class VideoGenerator
  def initialize(video)
    @video = video
    @base_temp_file_path = "temp/#{@video.key}"
    FileUtils.mkdir_p(@base_temp_file_path) unless File.exist?(@base_temp_file_path)
  end

  def generate_raw_video
    system "ffmpeg -framerate 0.1 -i inputs/#{@video.key}/image%03d.jpg temp/#{@video.key}/raw.mp4"
  end
end
