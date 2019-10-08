Rails.application.routes.draw do

  root 'sessions#new'
  resources :users
  resource :session
  resources :posts, except:[:index,:new,:edit]
  
  resources :subs do
    resources :posts, only:[:new,:edit, :index, :show]
  end
end
