var app = angular.module("bibimbap_app")
app.controller("ingredientsController", function(){
  this.grain = [
    "Wild Rice",
    "Basmati Rice",
    "Quinoa",
    "Couscous",
    "Bulgur"
  ],
  this.protein = [
    "Fried Egg",
    "Tofu",
    "Shredded Chicken",
    "Minced Beef",
    "Roasted Cashews"
    "Roasted Chickpeas"
  ],
  this.veg = [
    "Skiitake Mushrooms",
    "Shredded Carrots",
    "Seasoned Spinach",
    "Bean Sprouts",
    "Radishes"
    "Cucumbers"
  ],
  this.sauce = [
    "Sesame oil, sugar, apple cider vinegar, minced garlic, gochujang (Korean chili paste)",
    "Brown sugar, soy sauce, ginger",
    "Lemon juice, olive oil, soy sauce, sesame seeds",
    "Rice vinegar, soy sauce, olive oil",
    "Honey, dijon mustard, olive oil, red pepper flakes"
  ]

  this.divIsVisible = false
  this.toggleDiv = function(){
  if(this.divIsVisible){
    this.divIsVisible = false
  }
  else{
    this.divIsVisible = true
  }
}
})();
