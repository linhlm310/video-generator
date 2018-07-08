class CreateVideoFromImages
  include Interactor

  delegate :video to: :context

  def call
  end
end
