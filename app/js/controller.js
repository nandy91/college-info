angular.module('UniversityApp.controllers', []).
  controller('searchController', function($scope, uInfoAPIservice) {
    $scope.nameFilter = null;
    $scope.searchList = [];

      uInfoAPIservice.getSearchInfo().success(function (response) {
        //Dig into the response to get the relevant data
        $scope.searchList = response;
    });
  }).controller('indiaController', function($scope, uInfoAPIservice) {
    
    $scope.indiaList = [];

      uInfoAPIservice.getIndiaInfo().success(function (response) {
        //Dig into the response to get the relevant data
        $scope.indiaList = response;
    });
  }).
controller('usaController', function($scope, uInfoAPIservice) {
    
    $scope.usaList = [];

      uInfoAPIservice.getUSAInfo().success(function (response) {
        //Dig into the response to get the relevant data
        $scope.usaList = response;
    });
  });