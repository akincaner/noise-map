angular.module('starter.controllers', [])

    .controller('HomeController', function ($scope, $http, $rootScope) {
        $rootScope.PageTitle = 'Noise Map';
        $scope.Marker = [];

             $http({
            method: 'POST',
            url: 'http://noisemap.tk/connection.php',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
        })
            .then(function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    if(response.data[i].latitude == response.data[i+1].latitude && response.data[i].longitude == response.data[i+1].longitude){
                        i++;
                    }else{
                        $scope.Marker.push({'id' : response.data[i].id, 'coord':{'longitude':response.data[i].longitude,'latitude':response.data[i].latitude},'window':{'title':response.data[i].decibel}});
                    }

                }
            });


        $scope.map = {center: {latitude:38.388802, longitude:27.045222}, zoom: 10, bounds: {}};
        $scope.stroke_orange = {color: '#DF6C0A', weight: 0, opacity: 0.35};
        $scope.fill_orenge = {color: '#DF6C0A', opacity: 0.35};
        $scope.stroke_red = {color: '#CD3300', weight: 0, opacity: 0.35};
        $scope.fill_red = {color: '#CD3300', opacity: 0.35};
        $scope.stroke_green = {color: '#7dff33', weight: 0, opacity: 0.35};
        $scope.fill_green = {color: '#7dff33', opacity: 0.35};

    })

    .controller('ContactController', function ($scope, $http, $location, $rootScope) {
        $rootScope.PageTitle = 'Noise Map';
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

