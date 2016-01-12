"use strict";

(function(){
  angular
  .module("bibimbap")
  .controller("IngredientsIndexController", [
    "IngredientsIndexControllerFunction"
  ]);

  function IngredientsIndexControllerFunction(){
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
      "Roasted Cashews",
      "Roasted Chickpeas"
    ],
    this.veg = [
      "Shiitake Mushrooms",
      "Shredded Carrots",
      "Seasoned Spinach",
      "Bean Sprouts",
      "Radishes"
    ],
    this.sauce = [
      "Sesame oil, sugar, apple cider vinegar, minced garlic, gochujang (Korean chili paste)",
      "Brown sugar, soy sauce, ginger",
      "Lemon juice, olive oil, soy sauce, sesame seeds",
      "Rice vinegar, soy sauce, olive oil",
      "Honey, dijon mustard, olive oil, red pepper flakes"
    ]
  }
})();
