var StarterApp = angular.module('starter', ['starter.controllers', 'ui.router', 'uiGmapgoogle-maps'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'home.html',
                controller: 'HomeController'
            })


            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('contact', {
                url: '/contact',
                templateUrl: 'contact.html',
                controller: 'ContactController'
            });


    })

    .config(function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDzevUPWLEDQqFZI38x31H_IeJ6iWu61yo',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    });
