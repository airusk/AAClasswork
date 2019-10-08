class PostsController < ApplicationController
  before_action :require_login

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.save
    redirect_to sub_url(@post.sub_id)
    flash[:errors] = @post.errors.full_messages
  end

  def edit
    @post = Post.find(params[:id])

  end

  def update
    @post = Post.find(params[:id])
    if @post.user_id == current_user.id && @post.update(post_params)
      redirect_to post_url(@post)
    else
      flash[:errors]=@post.errors.full_messages
      render :edit
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to sub_url(@post.sub_id)
  end

  private

  def post_params
    params.require(:post).permit(:title,:url,:content,:sub_id)
  end
end
