Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :events, except: [:new] do
      resources :likes, only: [:create, :destroy]
      resources :follows, only: [:create, :destroy]
      resources :registrations, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resource :likes, only: [:destroy]
    resource :follows, only: [:destroy]
    get "/verify_user", to: "users#verify_user"
    get "/created_events", to: "events#created_events_index"
    get "/liked_events", to: "events#liked_events_index"
  end
end
