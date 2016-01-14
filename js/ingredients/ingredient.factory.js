"use strict";

(function(){
  angular
  .module("ingredients")
  .factory("IngredientFactory", [
    IngredientFactoryFunction
  ]);

  function IngredientFactoryFunction() {
    var firebaseUrl = "https://glowing-inferno-3070.firebaseio.com/#-K7wbvhYToUW8nxWZvbo|6eeab6341889788cf8978b76035d8fe4";
    var connectedRef = new Firebase(firebaseUrl + "/.info/connected");
    connectedRef.on("value",
    function(snapshot) {
      if (snapshot.val() === true) {
        console.log("Connected to firebase:", firebaseUrl);
      } else {
        console.log("Not connected to firebase:", firebaseUrl);
      }
    });
  }
})();
