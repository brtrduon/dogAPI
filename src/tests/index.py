from selenium import webdriver
from selenium.webdriver.common.by import By
import time

class dog_api_test():
  breed_list = ["affenpinscher", "corgi", "turkish angora", "asdf", "husky", "akita", "appenzeller", "basenji", "beagle"]

  def breed_search(self, breed_list=breed_list):
    baseUrl = "http://localhost:8080/"
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get(baseUrl)
    driver.implicitly_wait(10)

    input_field = driver.find_element_by_class_name("form-control")

    for breed in breed_list:
      input_field.clear()

      input_field.send_keys(breed)

      search_button = driver.find_element_by_class_name("btn")
      search_button.click()
      time.sleep(1)

      try:
        invalid_breed = driver.find_element_by_class_name("invalid-breed")
        print(breed.capitalize() + " is an invalid breed")
      except:
        valid_breed = driver.find_element_by_class_name("dog-image")
        print(breed.capitalize() + " is a valid breed")

ff = dog_api_test()
ff.breed_search()