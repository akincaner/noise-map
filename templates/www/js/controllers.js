angular.module('starter.controllers', [])

    .controller('HomeController', function ($scope, $rootScope, $http, $cookies, $location, $window, $anchorScroll) {

        $scope.PageTitle = 'Noise Map';
 })

    .controller('ContactController', function ($scope, $http) {
        $scope.PageTitle = 'Noise Map';
    });

