class Api::PicController < ApplicationController
  def get_pic
    @pic_id, @w, @h = params[:pic_id].to_i % Dir[Rails.root.join('app', 'assets','images','*.jpg')].length,\
        params[:w].to_i,params[:h].to_i
    # get current image path
    @path = Dir[Rails.root.join('app', 'assets','images','*.jpg')][@pic_id]
    @imageW, @imageH = FastImage.size(@path)
    @wSize = @imageW/20
    @hSize = @imageH/20

    @img = Magick::Image.read(@path).first.crop(@w*@wSize, @h*@hSize, @wSize, @hSize)
    send_data @img.to_blob, :filename => "1.jpg",
              :disposition => 'inline',
              :type => "image/jpeg"
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
