require 'test_helper'

class MainControllerTest < ActionController::TestCase
  test "should get pic" do
    get :pic
    assert_response :success
  end

end
