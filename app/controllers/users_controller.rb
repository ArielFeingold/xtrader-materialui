class UsersController < ApplicationController
    before_action :authenticate_user, only: [:index, :show, :update]

  def create
    user = User.new(user_params)
    if user.save && user.create_balance
      render status: 200, json: { user: user}
    else
      render status: 400, json: { error: user.errors.messages}
    end
  end

  def update
    user = User.find_by(id: params[:user_id])
    trade_amount = params[:user_shares].to_i * params[:stock_price].to_f
    stock = Stock.find_by(symbol: params[:symbol], user_id: params[:user_id])
    if stock != nil
      if params[:type] == "buy"
      stock.user_shares = stock.user_shares + params[:user_shares].to_i
      else params[:type] == "sell"
        stock.user_shares = stock.user_shares - params[:user_shares].to_i
      end
    else
      stock = Stock.new(symbol: params[:symbol], user_id: params[:user_id], user_shares: params[:user_shares])
    end
    trade = stock.trades.build(user_id: current_user.id, amount: params[:user_shares], price: params[:stock_price], symbol: params[:symbol], trade_type: params[:type])
    if params[:type] == "buy"
      new_balance = (current_user.balance.balance - trade_amount)
    end
    if params[:type] == "sell"
      new_balance = (current_user.balance.balance + trade_amount)
    end
    user.balance.balance = new_balance
      if stock.save && trade.save && user.balance.save
        render status: 200, json: {stocks: user.stocks, balance: user.balance}
      else
        render status: 400, json: {error: "Something went wrong"}
      end
  end

  def show
    user = User.find_by(id: params[:id])
    render status: 200, json: user
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
