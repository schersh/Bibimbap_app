(function() {
  angular
  .module('bibimbap_app', [
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
      templateUrl: "js/ingredients/index.html"
      controller: "IngredientIndexController",
      controllerAs: "IngredientIndexViewModel"
    })
    .
  }

})();
