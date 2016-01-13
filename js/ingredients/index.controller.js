"use strict";

// (function(){
  angular
  .module("ingredients")
  .controller("IngredientIndexController", [
    "$firebaseArray",
    ControllerFunction
  ]);

  function ControllerFunction(){
    var grain = [
      "Wild Rice",
      "Basmati Rice",
      "Quinoa",
      "Couscous",
      "Bulgur"
    ];
    var protein = [
      "Fried Egg",
      "Tofu",
      "Shredded Chicken",
      "Minced Beef",
      "Roasted Cashews",
      "Roasted Chickpeas"
    ];
    var veg = [
      "Fresh Cucumber",
      "Shredded Carrots",
      "Bean Sprouts",
      "Radishes",
      "Snow Peas"
    ];
    var veg2 = [
      "Roasted Brussel Sprouts",
      "Shiitake Mushrooms",
      "Wilted Spinach",
      "Roasted Red Peppers"
    ]
    var sauce = [
      "Sauce: Sesame oil, sugar, apple cider vinegar, minced garlic, gochujang (Korean chili paste)",
      "Sauce: Brown sugar, soy sauce, ginger",
      "Sauce: Lemon juice, olive oil, soy sauce, sesame seeds",
      "Sauce: Rice vinegar, soy sauce, olive oil",
      "Sauce: Honey, dijon mustard, olive oil, red pepper flakes"
    ];
    var getRecipe = function(){
      // toggle class to show div on index.html which will display ul li of recipe obj
      return {
        grain: grain[Math.floor(Math.random() * grain.length)],
        veg: veg[[Math.floor(Math.random() * veg.length)]],
        veg2: veg2[[Math.floor(Math.random() * veg2.length)]],
        protein: protein[Math.floor(Math.random() * protein.length)],
        sauce: sauce[Math.floor(Math.random() * sauce.length)]
      };
    };
    this.spinBowl = function(){
      // toggle class to activate css transitions
      // set timeout
      // remove class
      this.recipeIsVisible = true
      this.recipe = getRecipe()
    };
  }
// })();
