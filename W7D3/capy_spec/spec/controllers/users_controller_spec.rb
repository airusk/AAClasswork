require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'GET #new' do
    it 'renders the new users template' do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe 'POST #create' do
    let(:user_params) do {user:{
      username:"harrypotter",
      email:"hpotter@hogwarts.io",
      password:"ilovehedwig"
    }}
    end
    context "with valid params" do
      it 'redirects user to user show page' do
        post :create, params: user_params
        harrypotter = User.find_by(username:"harrypotter")
        expect(response).to redirect_to(:show)
      end
    end # WE ARE HERE
  end

  describe 'GET #new' do
    it 'renders the new users template' do
      get :new
      expect(response).to render_template(:new)
    end
  end
end
