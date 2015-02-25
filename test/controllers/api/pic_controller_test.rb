require 'test_helper'

class Api::PicControllerTest < ActionController::TestCase
  test "should get get_pic" do
    get :get_pic
    assert_response :success
  end

  test "should get pic_total" do
    get :pic_total
    assert_response :success
  end

  test "should get pic_dimensions" do
    get :pic_dimensions
    assert_response :success
  end

end
