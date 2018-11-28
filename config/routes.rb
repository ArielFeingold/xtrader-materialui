Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :trades
  resources :stocks
  resources :users
  resources :balance, only: :update
end
