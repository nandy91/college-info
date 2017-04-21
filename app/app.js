angular.module('UniversityApp', [
  'UniversityApp.controllers',
  'UniversityApp.services',
  'ngRoute'
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when("/search", {templateUrl: "partials/search.html", controller: "searchController"}).
		when("/india", {templateUrl: "partials/india.html", controller: "indiaController"}).
		when("/usa", {templateUrl: "partials/usa.html", controller: "usaController"}).
		otherwise({redirectTo: '/search'});
}]);