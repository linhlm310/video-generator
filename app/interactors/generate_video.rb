class GenerateVideo
  include Interactor::Organizer

  organize CreateVideoFromImages, AddVideoSubtitles
  # , AddVideoAudio
end
