class SubsController < ApplicationController
  before_action :require_login
  def new
    @sub = Sub.new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.user_id = current_user.id 
    if @sub.save 
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @subs.errors.full_messages 
      render :new
    end
  end

  def edit
    @sub = Sub.find(params[:id])
  end

  def update
    @sub = Sub.find(params[:id])
    if @sub.user_id == current_user.id && @sub.update(sub_params)
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @subs.errors.full_messages 
      render :edit
    end
  end

  def index
    @subs = Sub.all
  end

  def show
    @sub = Sub.find(params[:id])
  end

  def destroy
    @sub = Sub.find(params[:id])
    @sub.destroy 
    redirect_to subs_url 
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description)
  end
end
