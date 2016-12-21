(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.checkLunch = function () {
        var displayMsg ="";
        var dishCount = getLunchDishCount($scope.lunchDishes);
        $scope.dishCount = dishCount;
        if (dishCount ==0 || !dishCount)
        {
          displayMsg = "Please enter data first";
        }else if(dishCount <= 3)
        {
          displayMsg = "Enjoy!";
        }else
        {
            displayMsg = "Too much!";
        }

    return $scope.displayMsg = displayMsg;
     };

    function getLunchDishCount(string){
      var dishCount = 0;
      if(string){
        var dishes = null;
        dishes = string.split(',');
        dishCount = dishes.length;
      }
      return dishCount;
    };

  }

})();
