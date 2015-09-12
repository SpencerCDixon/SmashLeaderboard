class MatchesController < ApplicationController
  def create
    Match.create(
      p_one_id: match_params[:playerOne][:user],
      p_two_id: match_params[:playerTwo][:user],
      p_three_id: match_params[:playerThree][:user],
      p_four_id: match_params[:playerFour][:user],
      p_one_char_id: match_params[:playerOne][:character],
      p_two_char_id: match_params[:playerTwo][:character],
      p_three_char_id: match_params[:playerThree][:character],
      p_four_char_id: match_params[:playerFour][:character],
    )
    render json: Match.all.to_json
  end

  def match_params
    params.require(:match)
  end
end
