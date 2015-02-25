class Api::PicController < ApplicationController
  def get_pic
    pic, w, h = params[:pic], params[:w],params[:h]
    send_file Rails.root.join('app', 'assets','images','red.jpg'), type: 'image/jpeg', disposition: 'inline'
  end

  def pic_total
    render json: Dir[Rails.root.join('app', 'assets','images','*.jpg')].length
  end

  def pic_dimensions
    pic_id = params[:pic_id].to_i
    @response = Class.new do
      @w, @h =  FastImage.size(Dir[Rails.root.join('app', 'assets','images','*.jpg')][pic_id])
    end
    render json: @response
  end
end
