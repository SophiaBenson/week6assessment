console.log("Bird is in SCripts.js");
var myApp = angular.module( 'myApp', [] );

myApp.controller('birdHeroController', ['$scope', '$http', function ($scope, $http) {
  $scope.saveHero = function () {
    console.log('bird is in saveHero with : ' + $scope.alias);
    var objectToSend = {
      alias: $scope.alias,
      first_name: $scope.first_name,
      last_name: $scope.last_name,
      city: $scope.city,
      power_name: $scope.power_name
    };//end object

    $http({
      method: 'POST',
      url:"/addHeroes",
      data: objectToSend
    }).then(function () {
      $scope.getHeroes();
    });
  };//end saveHero
$scope.getHeroes = function () {
  console.log('bird is in getHeroes');
  $http({
    method:'GET',
    url:"/getHeroes"
  }).then(function (response) {
    $scope.heroes=response.data;
    console.log("$scope.heroes" + $scope.heroes);
  });
};//end getHeroes
$scope.getHeroes();
}]);//end controller
