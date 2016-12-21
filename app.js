(function () {
'use strict';
angular.module('myFirstApp',[])
.controller('MyFirstController', function ($scope){
  $scope.name ="Test!";
  $scope.sayHello = function () {
    return "Hello!!!!";
  };
});
})();