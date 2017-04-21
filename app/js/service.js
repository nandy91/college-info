angular.module('UniversityApp.services', []).
  factory('uInfoAPIservice', function($http) {

    var uInfoAPI = {};

    uInfoAPI.getSearchInfo = function() {
      return $http({
        method: 'GET', 
        url: 'university/world.json'
      });
    }
    uInfoAPI.getIndiaInfo = function() {
      return $http({
        method: 'GET', 
        url: 'university/university.json'
      });
    }
    uInfoAPI.getUSAInfo = function() {
      return $http({
        method: 'GET', 
        url: 'university/universityusa.json'
      });
    }


    return uInfoAPI;
  });