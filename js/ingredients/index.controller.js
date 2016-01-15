"use strict";

// (function(){
  angular
  .module("ingredients")
  .controller("IngredientIndexController", [
    ControllerFunction
  ]);

  function ControllerFunction(){
    var grain = [
      "Wild Rice",
      "Basmati Rice",
      "Quinoa",
      "Couscous",
      "Bulgur",
      "Farro"
    ];
    var protein = [
      "Fried or soft-boiled Egg",
      "Tofu (marinated or grilled)",
      "Shredded Chicken",
      "Minced Beef",
      "Roasted Cashews",
      "Roasted Chickpeas"
    ];
    var veg = [
      "Shredded Cucumber",
      "Shredded Carrots",
      "Bean Sprouts",
      "Radishes",
      "Snow Peas"
    ];
    var veg2 = [
      "Roasted Brussel Sprouts",
      "Roasted Sweet Potato",
      "Shiitake Mushrooms",
      "Spinach (wilted)",
      "Roasted Red Peppers"
    ];
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
    var getAllIngredients = function(){
      return {
        grain: grain[grain.all],
        veg: veg[veg.all],
        veg2: veg2[veg2.all],
        protein: protein[protein.all],
        sauce: sauce[sauce.all],
      };
    };
  }
// })();
