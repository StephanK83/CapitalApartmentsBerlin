# define your homecontroller here

class HomeController < ApplicationController
  def index
    @is_index_page = true
  end
end
