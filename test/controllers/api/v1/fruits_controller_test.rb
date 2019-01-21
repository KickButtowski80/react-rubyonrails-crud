require 'test_helper'

class Api::V1::FruitsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_fruits_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_fruits_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_fruits_destroy_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_fruits_update_url
    assert_response :success
  end

end
