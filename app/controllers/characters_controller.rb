class CharactersController < ApplicationController
  def index
    @characters = Character.all
    render json: @characters.to_json
  end
end
