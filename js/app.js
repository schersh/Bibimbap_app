(function() {
  angular
  .module('bibimbap', [
    "ui.router",
    "ingredients"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    routerFunction
  ]);
  function routerFunction($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("ingredientsIndex", {
      url: "/ingredients",
      templateUrl: "js/ingredients/index.html",
      controller: "IngredientIndexController",
      controllerAs: "IngredientIndexViewModel"
    })
    .state("ingredientsNew", {
      url: "/ingredients/new",
      templateUrl: "js/ingredients/new.html",
      controller: "IngredientIndexController",
      controllerAs: "IngredientIndexViewModel"
    });
  };
})();
