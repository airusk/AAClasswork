class ArtworksController < ApplicationController
  def index
    artist = User.find(params[:user_id])
    artworks = artist.artworks
    # if params.has_key?(:artist_id)
    #   artworks = Artwork.where(artist_id: params[:artist_id])
    # else
    #   artworks = Artwork.all
    # end
    render json:artworks
  end

  def show
    artwork = Artwork.find(params[:id])
    render json:artwork
  end

  def update
    artwork = Artwork.find(params[:id])

    if artwork.update(artwork_params)
      render json:artwork
    else
      render json:artwork.errors.full_messages, status: 422
    end
  end

  def create
    artwork = Artwork.new(artwork_params)
      if artwork.save
        render json:artwork
      else
        render json:artwork.errors.full_messages, status:422
      end
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json:artwork
  end



  private
  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end
end
