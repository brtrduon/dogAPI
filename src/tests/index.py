from selenium import webdriver
from selenium.webdriver.common.by import By
import time

class dog_api_test():
  def __init__(self):
    self.breed_list = ["affenpinscher", "corgi", "turkish angora", "asdf", "husky", "akita", "appenzeller", "basenji", "beagle"]
    self.baseUrl = "http://localhost:8080/"
    self.driver = webdriver.Chrome()  

    self.driver.maximize_window()
    self.driver.get(self.baseUrl)
    self.driver.implicitly_wait(5)


  def breed_search(self):
    input_field = self.driver.find_element_by_class_name("form-control")

    for breed in self.breed_list:
      input_field.clear()
      input_field.send_keys(breed)

      search_btn = self.driver.find_element_by_class_name("btn")
      search_btn.click()
      time.sleep(1)
      # sleep is needed to not leak "invalid breed" to valid breeds 

      try:
        invalid_breed = self.driver.find_element_by_class_name("invalid-breed")
        print(breed.capitalize() + " is an invalid breed")
      except:
        valid_breed = self.driver.find_element_by_class_name("dog-image")
        print(breed.capitalize() + " is a valid breed")

  def add_to_favorites(self, breed):
    input_field = self.driver.find_element_by_class_name("form-control")
    input_field.clear()
    input_field.send_keys(breed)

    search_btn = self.driver.find_element_by_class_name("btn")
    search_btn.click()
    time.sleep(3)

    heart = self.driver.find_element_by_class_name("white")
    heart.click()
    time.sleep(1)

  def driver_quit(self):
    self.driver.quit()

ff = dog_api_test()
# ff.breed_search()
ff.add_to_favorites("husky")
# ff.driver_quit()