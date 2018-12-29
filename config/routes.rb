Rails.application.routes.draw do

end

Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
        post 'user_token' => 'user_token#create'
        resources :trades
        resources :stocks
        resources :users
        resources :balance, only: :update
      end
  end
end
