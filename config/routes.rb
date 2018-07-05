Rails.application.routes.draw do
  get 'home/index'
  get 'home/timestamp'

  root 'home#index'

  resources :videos, only: %i[create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
