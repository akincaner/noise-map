angular.module('starter.controllers', [])

    .controller('HomeController', function ($scope,$http) {
        $scope.PageTitle = 'Noise Map';
 $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4, bounds: {}};
    })

    .controller('ContactController', function ($scope, $http, $location) {
        $scope.PageTitle = 'Noise Map';
        $scope.formData = {};
        $scope.result = 'hidden';
        // process the form
        $scope.processForm = function () {
            $http({
                method: 'POST',
                url: '/mail.php',
                data: $.param($scope.formData),  // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
            })
                .then(function (data) {

                        $scope.resultMessage = data.message;
                        $scope.result = 'bg-danger';
                        $scope.formData = {};
                        $location.path("/home");
                });

        };

    });

