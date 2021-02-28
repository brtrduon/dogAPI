from selenium import webdriver
from selenium.webdriver.common.by import By
import time

class dog_api_test():
  breed_list = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "australian-shepherd", "basenji", "beagle"]

  def breed_search(self, breed_list=breed_list):
    baseUrl = "http://localhost:8080/"
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get(baseUrl)
    driver.implicitly_wait(10)

    input_field = driver.find_element_by_class_name("form-control")

    for breed in breed_list:
      input_field.clear()
      time.sleep(1)
      input_field.send_keys(breed)

      search_button = driver.find_element_by_class_name("btn")
      search_button.click()
      time.sleep(2)

ff = dog_api_test()
ff.breed_search()