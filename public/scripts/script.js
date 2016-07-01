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
//delete list
$scope.deleteFromList = function( idx) {
  console.log("bird is removing ");
  var heroDelete = $scope.alias[idx];
  API.deleteFromList({id: heroDelete.id}, function (success) {
    $scope.alias.splice(idx, 1);
  });
// var data = $.param({
//   alias: $scope.alias,
//   first_name: $scope.first_name,
//   last_name: $scope.last_name,
//   city: $scope.city,
//   power_name: $scope.power_name
// });
// $http.delete('/deleteHero')
// .success(function () {
//   res.sendStatus(200);
// })
// .error(function () {

// });
  };



$scope.getHeroes();
}]);//end controller
