Rails.application.routes.draw do
  get 'home/index'
  root "home#index"
end

# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
