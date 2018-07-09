class AddVideoSubtitles
  include Interactor

  delegate :video, :video_generator, to: :context

  def call
    video.generating_subtitles!
    generate_subtitles
    video.adding_subtitles!
    add_subtitles
  end

  private

  def generate_subtitles
    subtitle_generator = SubtitleGenerator.new(video)
    subtitle_generator.generate
  end

  def add_subtitles
    video_generator.add_subtitles
  end
end
