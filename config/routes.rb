Rails.application.routes.draw do
  get 'home/index'
  root "home#index"
  get '/about', to: 'about_us#index', as: 'about'

end

# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
