"use strict";

(function(){
  angular
  .module("ingredients")
  .controller("IngredientIndexController", [
    "ControllerFunction"
  ]);

  function ControllerFunction(){
    this.grain = [
      "Wild Rice",
      "Basmati Rice",
      "Quinoa",
      "Couscous",
      "Bulgur"
    ];
    this.protein = [
      "Fried Egg",
      "Tofu",
      "Shredded Chicken",
      "Minced Beef",
      "Roasted Cashews",
      "Roasted Chickpeas"
    ];
    this.veg = [
      "Shiitake Mushrooms",
      "Shredded Carrots",
      "Seasoned Spinach",
      "Bean Sprouts",
      "Radishes"
    ];
    this.sauce = [
      "Sesame oil, sugar, apple cider vinegar, minced garlic, gochujang (Korean chili paste)",
      "Brown sugar, soy sauce, ginger",
      "Lemon juice, olive oil, soy sauce, sesame seeds",
      "Rice vinegar, soy sauce, olive oil",
      "Honey, dijon mustard, olive oil, red pepper flakes"
    ];
    this.showRecipe = function(){
      // toggle class to show div on index.html which will display ul li of recipe obj
    };
    this.spinBowl = function(){
      console.log('spinning bowl')
      // toggle class to activate css transitions
      // set timeout
      // remove class
      // create new recipe obj with randomly selected ingredients
      // call show recipe function(recipe obj)
    };

  }
})();
