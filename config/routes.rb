Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  resources :characters
  resources :users, only: :index
  resources :matches
end
