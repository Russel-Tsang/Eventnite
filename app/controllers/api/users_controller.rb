class Api::UsersController < ApplicationController
	def create
		# debugger
		@user = User.new(user_params)
		if @user.save
			login!(@user)
			render :show
		else
			render json: @user.errors.full_messages, status: 401
		end
  	end

	def show
		@user = User.find(params[:id])
		render :show
	end

	def verify_user
		@user = User.find_by({email: params[:user][:email]})
		if @user
			render json: { email: @user.email }
		else
			render json: { email: "no email" }
		end
	end

  	private 

	def user_params
		params.require(:user).permit(:email, :password, :fname, :lname)
	end
end