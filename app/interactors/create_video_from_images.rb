class CreateVideoFromImages
  include Interactor

  def call
    context.video.processing!
  end
end
