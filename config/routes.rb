Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :events, except: [:new] do
      resources :likes, only: [:create, :destroy]
      resources :follows, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end
end
